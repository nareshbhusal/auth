import React, { useEffect } from 'react';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';

import { userLogout, fetchUserData } from '../../store/actions';

import { connect } from 'react-redux';

const Dashboard = ({ id, userLogout, fetchUserData }) => {
    // perform authentication
    id=id.id;
    
    // useEffect(() => {
    //     fetchUserData();
    // }, [id]);

    return (
        <div className={styles.dashboard}>
            <Nav />
            Dashboard for {id}
            <div>
                <Link to="/register">register</Link>
                <Link to="/login">login</Link>
                <Link to="/">dashboard</Link>
                <Link to={`/dashboard/${id}/questions`}>questions</Link>
                <Link to={`/dashboard/${id}/settings`}>settings</Link>
                <Link to={`/dashboard/${id}/funnels`}>funnels</Link>
                <Link to={`/dashboard/${id}/offers`}>offers</Link>
            </div>
            <button onClick={async ()=>await userLogout()}>Logout</button>
            <button onClick={async ()=>await fetchUserData()}>get logged in user</button>
        </div>
    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { userLogout, fetchUserData })(Dashboard);