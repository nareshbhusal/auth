import React from 'react';
import styles from './Nav.module.css';

import Link from 'next/link';
import { useSelector } from 'react-redux';

const Nav = () => {

    const state = useSelector((state) => state);
    const user_id = state.auth.user_id;

    return (
        <nav className={styles.nav}>
            <Link href={'/dashboard'}>
                <a className={styles.logo}>applogo</a>
            </Link>
        </nav>
    );
}

export default Nav;

