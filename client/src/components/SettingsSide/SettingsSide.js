import React from 'react';
import styles from './SettingsSide.module.css';

import { Link } from 'react-router-dom';

const SettingsSide = ({ id }) => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/dashboard/${id}/settings`}>
                <i className="fas fa-file-invoice"></i>
                <span>account info</span>
            </Link>
            <Link className={styles.link} to={`/dashboard/${id}/settings/websites`}>
                <i className="fa fa-file-invoice"></i>
                <span>websites</span>
            </Link>
            <Link className={styles.link} to={`/dashboard/${id}/settings/billing`}>
                <i className="fa fa-file-invoice"></i>
                <span>Billing</span>
            </Link>
            <Link className={styles.link} to={`/dashboard/${id}/settings/subscription`}>
                <i className="fa fa-file-invoice"></i>
                <span>Subscription</span>
            </Link>
            <Link className={styles.link} to={`/dashboard/${id}/settings/invoices`}>
                <i className="fa fa-file-invoice"></i>
                <span>Invoices</span>
            </Link>
        </div>
    );
}

export default SettingsSide;