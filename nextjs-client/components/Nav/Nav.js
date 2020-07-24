import React from 'react';
import styles from './Nav.module.css';

import Link from 'next/link';
import { useSelector } from 'react-redux';

const Nav = () => {

    const user_id = useSelector((state) => state.auth.user_id);

    return (
        <nav className={styles.nav}>
            <Link href={'/dashboard'}>
                <a className={styles.logo}>applogo</a>
            </Link>
        </nav>
    );
}

export default Nav;

