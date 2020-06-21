import React, { useState } from 'react';
import styles from './Register.module.css';

import { userRegister } from '../../store/actions';
import { connect } from 'react-redux';

import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';
import Message from '../../components/Message/Message';

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Register = ({ userRegister, id }) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const [error, setError] = useState('');
    
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    
    const handleNameInput = e => {
        setName(e.target.value);
    }
    const handleEmailInput = e => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = e => {
        setPassword(e.target.value);
    }
    const onSubmitHandler = async e => {
        e.preventDefault();
        error && setError('');
        const { msg, err, id } = await userRegister({ name, email, password });
        id && setRedirect(true);
        err && setError(err);
    }
    
    /*
    *styling borders of input fields
    */
   
   
    let passInputStyle = "";
    let nameInputStyle="";
    let emailInputStyle="";
    if (nameFocused && !name) {
        nameInputStyle=styles.invalid;
    } else if(name) {
        nameInputStyle=styles.valid;
    }
    if (emailFocused && !emailReg.test(email)) {
        emailInputStyle=styles.invalid;
    } else if(emailReg.test(email)) {
        emailInputStyle=styles.valid;
    }
    if (passwordFocused && password.length<8) {
        passInputStyle=styles.invalid;
    } else if(password.length>7) {
        passInputStyle=styles.valid;
    }

    const toggleEye = () => setShowPass(!showPass);

    return (
        <div className={styles.register}>
            <div className={styles.wrapper}>

                <form onSubmit={onSubmitHandler} className={styles.form}>
                    <h1 className={styles.heading}>
                        Let's get started
                    </h1>
                    <Message error={error}/>
                    <label htmlFor="name">Name</label>
                    <div className={styles.inputWrapper}>
                        <input autoFocus onClick={()=>setNameFocused(true)} value={name} required onChange={handleNameInput} className={styles.input+` ${nameInputStyle}`} name="name" type="text" placeholder="Full name"/>
                        <i className=""></i>
                    </div>

                    <label htmlFor="email">Email address</label>
                    <div className={styles.inputWrapper}>
                        <input onClick={()=>setEmailFocused(true)} value={email} required onChange={handleEmailInput} className={styles.input+` ${emailInputStyle}`} name="email" type="email" placeholder="Email address"/>
                        <i className=""></i>
                    </div>

                    <label htmlFor="password">Set a Password</label>
                    <div className={styles.inputWrapper}>
                        <input onClick={()=>setPasswordFocused(true)} value={password} required onChange={handlePasswordInput} className={styles.input+` ${passInputStyle}`} name="password" type={showPass ? "text" : "password"} placeholder="Password" />
                        <i onClick={(toggleEye)} className={showPass ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                    </div>

                    <input className={styles.input} type="submit" value="Sign up for free"/>
                </form>
                <GoogleAuth callback={userRegister} buttonText="Sign up with google" />
            </div>
        </div>
    );
}

const mapStateToProps = ( {id} ) => {
    return {id};
}

export default connect(mapStateToProps, { userRegister })(Register);