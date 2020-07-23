import React, { useState } from 'react';

import { GoogleLogin } from 'react-google-login';

import styles from './GoogleAuth.module.css';

const GoogleAuth = ({ buttonText, callback }) => {

    const googleResponse = async ({ accessToken, tokenId }) => {
        const id = await callback({ accessToken, tokenId });
        id && history.push(`/dashboard/${id}`);
    };

    const onFailure = error => {
        alert(error);
    }
    return (
        <div className={styles.container}>
            <GoogleLogin
                className={styles.button}
                clientId={process.env.oauth_client_id}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className={styles.oAuth}>
                        <img className={styles.google} src='/google.png' />
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

