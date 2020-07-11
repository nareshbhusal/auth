import React, { useState } from 'react';

import history from '../../history';

import googleImg from '../../assets/google.png';
import { GoogleLogin } from 'react-google-login';

const { client_id } = process.env;

import styles from './GoogleAuth.module.css';

const GoogleAuth = ({ buttonText, callback }) => {
    
    const googleResponse = async ({ accessToken, tokenId }) => {
        const id = await callback({ accessToken, tokenId });
        id && history.push(`/dashboard/${id}`);
    };

    const onFailure = error => {
        alert(error);
    }
	//console.log(client_id);
    return (
        <div className={styles.container}>
            <GoogleLogin
                className={styles.button}
                clientId={client_id}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className={styles.oAuth}>
                        <img className={styles.google} src={googleImg} />
                        <p>{buttonText}</p>
                    </button>
                )}
                onSuccess={googleResponse}
                onFailure={onFailure}
            />
        </div>
    );
}

export default GoogleAuth;
