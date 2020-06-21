import React from 'react';
import Nav from '../../components/Nav/Nav';

import styles from './DashboardWrapper.module.css';

const Wrapper = props => {
    return (
        <div className={styles.container}>
            <Nav />
            {props.children}
        </div>
    );
}

export default Wrapper;