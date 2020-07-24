import React, { useState, useEffect } from 'react';
import styles from '../styles/dashboard.module.css';
import Link from 'next/link';

import Nav from '../../components/Nav/Nav';

import { userLogout, fetchUserData } from '../../store/actions';

import { connect, useSelector } from 'react-redux';
import { withRouter } from 'next/router';

import { bindActionCreators } from 'redux';
import { wrapper } from '../../store/store';

const Dashboard = (props) => {

    const { userLogout, fetchUserData } = props;
    const user_id = useSelector((state) => state.auth.user_id);

    return (
        <div className={styles.dashboard}>
            <Nav />
            Dashboard for user with user_id: {user_id}
            <div>
                <Link href="/register"><a>register</a></Link>
                <Link href="/login"><a>login</a></Link>
                <Link href="/"><a>dashboard</a></Link>
                <Link href={`/dashboard/settings`}><a>settings</a></Link>
            </div>
            <button onClick={async ()=>await userLogout()}>Logout</button>
            <button onClick={async ()=>await fetchUserData()}>get logged in user's data</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: bindActionCreators(userLogout, dispatch),
    fetchUserData: bindActionCreators(fetchUserData, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
