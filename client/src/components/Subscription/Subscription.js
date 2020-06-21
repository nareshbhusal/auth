import React from 'react';
import styles from './Subscription.module.css';

const Subscription = ({ subscription }) => {
    return (
        <div className={styles.container}>
            <h3>Current plan</h3>
        <p>You're currently subscribed to ${subscription}/mo.</p>
        </div>
    );
}

export default Subscription;