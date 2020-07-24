import React, { useState } from 'react';
import styles from './Billing.module.css';

//import getCardImage from './getCardImage';

import Message from '../Message/Message';

const cc_format = (value) => {
    return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
}

const Billing = ({ updateData, billingInfo }) => {

    // const { name, number, expiryMonth, expiryYear, cvv, zip } = billingInfo;

    const [formData, setData] = useState({ ...billingInfo || {} });
    const [msg, setMsg] = useState({ error: '', msg: '' });
    let { name, number, expiryMonth, expiryYear, cvv, zip, cardType } = formData;


    const setFormData = (e) => {
        let targetName= e.target.name;
        let { value } = e.target;
        targetName !=='name' ? value=value.trim() : null;

        /*
        NOTE: Only convert to "number" type
        to check length and non NaN-ism
        */
        if (targetName==='number') {
            // maximum of 19 digits
            let number = value.replace(/ /g, '');
            const isNumber = !isNaN(number);
            // number = Number(number);

            if (number.toString().length<20 && isNumber) {
                setData({
                    ...formData,
                    number: cc_format(value)
                });
            }

        } else if (targetName==='expiryMonth' || targetName==='expiryYear') {
            // maximum of 4 digits

            // console.log(expiry, value);
            if (value.toString().length<3 && !isNaN(Number(value))) {

                setData({
                    ...formData,
                    [targetName]: value
                });

                if (value.toString().length>1){
                    document.querySelector('input[name="expiryYear"]').focus();
                }
            }

        } else if (targetName==='cvv') {
            // maximum of 4 digits
            const cvv=Number(value);
            if (value.toString().length<5 && !isNaN(cvv)) {
                setData({
                    ...formData,
                    [targetName]: value
                });
            }
        }
        else {
            setData({
                ...formData,
                [targetName]: value
            });
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        setMsg({ error: '', success:'' });
        if (!name || !number || !zip || !cvv || !expiryYear || !expiryMonth) {
            setMsg({ success: '', error: 'Please fill in all fields.' })
        } else {
            console.log({ billingInfo: formData });
            const { err } = await updateData({ billingInfo: formData });
            err ? setMsg({ error: err, success: '' }) : setMsg({ error: '', success: 'Saved billing info successfully!' })
        }
    }

    //const creditCardImage = getCardImage(number);

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <Message error={msg.error} success={msg.success}/>
                <div className={styles.field}>
                    <label htmlFor="name">
                        cardholder's name
                    </label>
                    <input onChange={setFormData}
                        required
                        value={name||''} id="name"
                        type="text" name="name"
                        placeholder="card holder's name" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="cardNumber">
                        card number
                    </label>
                    <div className={styles.inputWrapper}>
                        <input onChange={setFormData}
                            required
                            value={number||''} id="cardNumber"
                            name="number" type="text" />
                        {/*<img src={creditCardImage}
                            className={styles.card} /> */}
                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.field}>
                        <label htmlFor="expiryMonth">
                            expiry
                                <span className={styles.hidden}>
                                month</span>
                            </label>
                        <input onChange={setFormData}
                            required
                            placeholder="MM"
                            value={expiryMonth||''}
                            id="expiryMonth"
                            name="expiryMonth"
                            type="text" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.hidden} htmlFor="expiryYear">
                            expiry year
                        </label>
                        <input onChange={setFormData}
                            required
                            placeholder="YY"
                            value={expiryYear||''} id="expiryYear"
                            name="expiryYear" type="text" />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="cvv">cvv</label>
                        <input onChange={setFormData}
                            required
                            value={cvv||''} id="cvv"
                            name="cvv" type="text" />
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="zip">
                        zip/postal code
                    </label>
                    <input onChange={setFormData}
                        required
                        value={zip||''} id="zip"
                        name="zip" type="text" />
                </div>

                <input onClick={async(e) => await submitForm(e)} type="submit" value="save" />
            </form>
        </div>
    );
}

export default Billing;

