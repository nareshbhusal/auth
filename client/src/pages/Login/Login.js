import React, { useState, useEffect } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import styles from './Login.module.css';

import { connect } from 'react-redux';
import { userLogin, changePassword } from '../../store/actions';

import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';
import Message from '../../components/Message/Message';
import queryString from 'query-string';

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const Login = ({ userLogin, id, resetPassword, changePassword, match, location }) => {

    id = id.id;
    let { hash } = match.params;
    
    const [toRedirect, setRedirect] = useState(!!id);
    const [email, setEmail] = useState(() => {
        let hashEmail='';
        if (resetPassword) {
            const qs = queryString.parse(location.search);
            hashEmail = qs.email;
        }
        return hashEmail;
    });
    hash=`${hash}/?email=${email}`;
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    location = useLocation();
    
    const [showPass, setShowPass] = useState(resetPassword);
    
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    

    const handleEmailInput = e => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = e => {
        setPassword(e.target.value);
    }
    const submitHandler = resetPassword ? changePassword : userLogin;

    const onSubmitHandler = async e => {
        e.preventDefault();
        error && setError('');
        const { id, err, msg } = await submitHandler({ email, password, hash });
        id && setRedirect(true);
        err && setError(err);
    }

    let { from } = location.state || { from: {pathname: `/dashboard/${id}`} }
    if(!from.pathname.includes(id)) {
        from = {pathname: `/dashboard/${id}`};
    }

    if (toRedirect) {
        return <Redirect to={from} />
    }

    /*
    *styling borders of input fields
    */

    // TODO: Set error messages display
    

   let passInputStyle = "";
   let emailInputStyle="";

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
        <div className={styles.login}>
            <div className={styles.wrapper}>
                <form onSubmit={onSubmitHandler} className={styles.form}>
                    <h1 className={styles.heading}>
                        {resetPassword ? "Change Password" : "Welcome back!" }
                    </h1>
                    <Message error={error}/>
                    <label htmlFor="email">Email address</label>
                    <div className={styles.inputWrapper}>
                        {resetPassword ? 
                        <input disabled value={email} required className={styles.input+` ${emailInputStyle}`} name="email" type="email" placeholder="Email address"/>
                        : 
                        <input onClick={()=>setEmailFocused(true)} autoFocus value={email} required onChange={handleEmailInput} className={styles.input+` ${emailInputStyle}`} name="email" type="email" placeholder="Email address"/>
                        }
                        <i className=""></i>
                    </div>

                    <label htmlFor="password">{resetPassword ? "Enter your new password": "Password"}</label>
                    <div className={styles.inputWrapper}>
                        <input onClick={()=>setPasswordFocused(true)} value={password} required onChange={handlePasswordInput} className={styles.input+` ${passInputStyle}`} name="password" type={showPass ? "text" : "password"} placeholder="Password" />
                        <i onClick={(toggleEye)} className={showPass ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                    </div>
                    {resetPassword ? null 
                    :
                    <Link className={styles.forgotLink} to="/forgot-password">Forgot password?</Link>
                    }
                    <input className={styles.input} type="submit" value={resetPassword ? "Log in with new password" : "Log in"}/>
                    <div className={styles.register}>
                        <p>Don't have an account?</p>
                        <Link to="/register">Sign up for free</Link>
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

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { userLogin, changePassword })(Login);