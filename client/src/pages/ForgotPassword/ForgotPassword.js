import React, { useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import styles from './ForgotPassword.module.css';


import Message from '../../components/Message/Message';
import parseServerError from '../../utils/parseServerError';
import api from '../../api';

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = () => {
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({err:'', msg:''});

    const errorMsg = 'Failed. Reason unknown. Please contact support';
    const successMsg = 'You should get an email, if the email is registered. (check your spam box, too just in case)';

    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        setMessage({ err: '', msg: '' });
        try {
            const res = await api.post('/recoverPassword', {
                email
            });
            console.log(res.data);
            setMessage({ err: '', msg: successMsg });

        } catch(err) {
            const parsedErrorMsg = parseServerError(err);
            setMessage({ err: errorMsg || errorMsg, msg: '' });
        }
    }

    /*
    *styling borders of input fields
    */
    
   const [emailFocused, setEmailFocused] = useState(false);

   let emailInputStyle="";
   
   if (emailFocused && !emailReg.test(email)) {
       emailInputStyle=styles.invalid;
   } else if(emailReg.test(email)) {
       emailInputStyle=styles.valid;
   }

    return (
        <div className={styles.container}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <h1 className={styles.heading}>
                    Reset Password
                </h1>
                <Message error={message.err} success={message.msg}/>

                <label htmlFor="email">Email address</label>
                <div className={styles.inputWrapper}>
                    <input onClick={()=>setEmailFocused(true)} value={email} required onChange={handleEmailInput} className={styles.input+` ${emailInputStyle}`} name="email" type="email" placeholder="Email address"/>
                    <i className="fa fa-envelope"></i>
                </div>

                <input className={styles.input} type="submit" value="reset password"/>
            </form>
        </div>
    );
}

export default ForgotPassword;