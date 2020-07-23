import React from 'react';
import styles from './SettingsSide.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const SettingsSide = () => {
    return (
        <div className={styles.container}>
            <Link href={`/dashboard/settings`}>
                <a className={styles.link}>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    <span>account info</span>
                </a>
            </Link>
            <Link href={`/dashboard/settings/websites`}>
                <a className={styles.link}>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    <span>websites</span>
                </a>
            </Link>
            <Link href={`/dashboard/settings/billing`}>
                <a className={styles.link}>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    <span>Billing</span>
                </a>
            </Link>
            <Link href={`/dashboard/settings/subscription`}>
                <a className={styles.link}>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    <span>Subscription</span>
                </a>
            </Link>
            <Link href={`/dashboard/settings/invoices`}>
                <a className={styles.link}>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    <span>Invoices</span>
                </a>
            </Link>
        </div>
    );
}

export default SettingsSide;

