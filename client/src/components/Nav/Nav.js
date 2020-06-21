import React from 'react';
import styles from './Nav.module.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {

    const state = useSelector((state) => state.id);
    const id = state.id;

    return (
        <nav className={styles.nav}>
            <Link to={`/dashboard/${id}`} className={styles.logo}>
                applogo
            </Link>
        </nav>
    );
}

export default Nav;