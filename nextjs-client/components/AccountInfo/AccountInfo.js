import React, { useState } from 'react';
import styles from './AccountInfo.module.css';


const AccountInfo = ({ name, email, updateData }) => {

    const [userName, setName] = useState(name ||'');
    const [userEmail, setEmail] = useState(email || '');

    const updateUserData = (e) => {
        e.preventDefault();
        updateData({ fullname: userName, email: userEmail });
    }

    return (
        <form className={styles.form}>
            <div className={styles.wrapper}>
                <div className={styles.field}>
                    <label htmlFor="name">name</label>
                    <input required
                        value={userName}
                        placeholder="Name"
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        id="name"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="email">email</label>
                    <input required
                        value={userEmail}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" id="email"
                        placeholder="Email address" />
                </div>
                <input
                    onClick={updateUserData}
                    type="submit"
                    value="save changes" />
            </div>
        </form>
    );
}

export default AccountInfo;

