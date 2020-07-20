import React from 'react';
import styles from './Message.module.css';

const Message = ({ error, success }) => {

    return (
        <div className={styles.message}>
            {error ?
            <p className={styles.error}>
                {error}
            </p>
            : null
            }
            {success ?
            <p className={styles.success}>
                {success}
            </p>
            : null
            }
            {
                !error && !success ?
                <span className={styles.placeholder}>&nbsp;</span>
                : null
            }
        </div>
    );
}

export default Message;
