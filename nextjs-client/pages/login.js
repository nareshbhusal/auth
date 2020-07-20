import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import GoogleAuth from '../components/GoogleAuth/GoogleAuth';
import Message from '../components/Message/Message';
import styles from './styles/login.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { EMAIL_REG, MIN_PASS_LENGTH } from '../constants';

import { bindActionCreators } from 'redux';
import { userLogin, changePassword } from '../store/actions';
import { wrapper } from '../store/store';

import Link from 'next/link';

const Login = ({ userLogin, id, resetPassword, changePassword, match, location }) => {

    const [email, setEmail] = useState(() => {
        let hashEmail='';
        if (resetPassword) {
            const qs = queryString.parse(location.search);
            hashEmail = qs.email;
        }
        return hashEmail;
    });
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [showPass, setShowPass] = useState(resetPassword);

    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);


    const handleEmailInput = e => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = e => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        console.log(email, password);
    }


   let passInputStyle = "";
   let emailInputStyle="";

   if (emailFocused && !EMAIL_REG.test(email)) {
       emailInputStyle=styles.invalid;
   } else if(EMAIL_REG.test(email)) {
       emailInputStyle=styles.valid;
   }
   if (passwordFocused && password.length<=MIN_PASS_LENGTH) {
       passInputStyle=styles.invalid;
   } else if(password.length>7) {
       passInputStyle=styles.valid;
   }

   const toggleEye = () => setShowPass(!showPass);

    return (
        <div className={styles.login}>
            <div className={styles.wrapper}>
                <form onSubmit={onSubmitHandler} className={styles.form}>
                    <h1 className={styles.heading}>
                        {resetPassword ? "Change Password" : "Welcome back!" }
                    </h1>
                    <Message error={error}/>
                    <label className={styles.label} htmlFor="email">Email address</label>
                    <div className={styles.inputWrapper}>
                        {resetPassword ?
                        <input disabled value={email} required className={styles.input+` ${emailInputStyle}`} name="email" type="email" placeholder="Email address"/>
                        :
                        <input onClick={()=>setEmailFocused(true)} autoFocus value={email} required onChange={handleEmailInput} className={styles.input+` ${emailInputStyle}`} name="email" type="email" placeholder="Email address"/>
                        }
                        <i className=""></i>
                    </div>

                    <label className={styles.label} htmlFor="password">{resetPassword ? "Enter your new password": "Password"}</label>
                    <div className={styles.inputWrapper}>
                        <input onClick={()=>setPasswordFocused(true)} value={password} required onChange={handlePasswordInput} className={styles.input+` ${passInputStyle}`} name="password" type={showPass ? "text" : "password"} placeholder="Password" />
                        <FontAwesomeIcon className={styles.fa} onClick={(toggleEye)} icon={ showPass ? faEye : faEyeSlash } />

                    </div>
                    {resetPassword ? null
                    :
                    <Link href="/forgot-password">
                        <a className={styles.forgotLink}>Forgot password?</a>
                    </Link>
                    }
                    <input className={styles.input} type="submit" value={resetPassword ? "Log in with new password" : "Log in"}/>
                    <div className={styles.register}>
                        <p>Don't have an account?</p>
                        <Link href="/register">
                            <a>Sign up for free</a>
                        </Link>
                    </div>
                </form>
                {resetPassword ? null
                :
                <GoogleAuth callback={userLogin} buttonText="Log in with google" />
                }
            </div>
        </div>
    );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(serverRenderClock(true))
  store.dispatch(addCount())
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Login);
