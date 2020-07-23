import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles/register.module.css';

import GoogleAuth from '../components/GoogleAuth/GoogleAuth';
import Message from '../components/Message/Message';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { EMAIL_REG, MIN_PASS_LENGTH } from '../constants';

import { bindActionCreators } from 'redux';
import { userLogin, changePassword } from '../store/actions';
import { wrapper } from '../store/store';


function Register({ userRegister, id }) {

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
        console.log(name, email, password);
    }


    let passInputStyle = "";
    let nameInputStyle="";
    let emailInputStyle="";
    if (nameFocused && !name) {
        nameInputStyle=styles.invalid;
    } else if(name) {
        nameInputStyle=styles.valid;
    }
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
        <div className={styles.register}>
            <div className={styles.wrapper}>

                <form onSubmit={onSubmitHandler} className={styles.form}>
                    <h1 className={styles.heading}>
                        Let's get started
                    </h1>
                    <Message error={error}/>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <div className={styles.inputWrapper}>
                        <input autoFocus onClick={()=>setNameFocused(true)} value={name} required onChange={handleNameInput} className={styles.input+` ${nameInputStyle}`} name="name" type="text" placeholder="Full name"/>
                        <i className=""></i>
                    </div>

                    <label className={styles.label} htmlFor="email">Email address</label>
                    <div className={styles.inputWrapper}>
                        <input onClick={()=>setEmailFocused(true)} value={email} required onChange={handleEmailInput} className={styles.input+` ${emailInputStyle}`} name="email" type="email" placeholder="Email address"/>
                        <i className=""></i>
                    </div>

                    <label className={styles.label} htmlFor="password">Set a Password</label>
                    <div className={styles.inputWrapper}>
                        <input onClick={()=>setPasswordFocused(true)} value={password} required onChange={handlePasswordInput} className={styles.input+` ${passInputStyle}`} name="password" type={showPass ? "text" : "password"} placeholder="Password" />
                        <FontAwesomeIcon className={styles.fa} onClick={(toggleEye)} icon={ showPass ? faEye : faEyeSlash } />
                    </div>

                    <input className={styles.input} type="submit" value="Sign up for free"/>
                </form>
                <GoogleAuth callback={userRegister} buttonText="Sign up with google" />
            </div>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: bindActionCreators(userLogin, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch),
  }
}

//export const getStaticProps = wrapper.getStaticProps(
//    ({store, preview}) => {
//    // add something here?
//        store.dispatch({type: 'TICK', payload: 'was set in other page ' + preview});
//    }
//);

export default connect(null, mapDispatchToProps)(Register);
