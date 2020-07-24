import React, { useState, useEffect } from 'react';
import styles from '../styles/settings.module.css';
import SettingsSide from '../../components/SettingsSide/SettingsSide';

import AccountInfo from '../../components/AccountInfo/AccountInfo';
import Websites from '../../components/Websites/Websites';
import Billing from '../../components/Billing/Billing';
import Subscription from '../../components/Subscription/Subscription';

import Nav from '../../components/Nav/Nav';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { changePassword, updateUserData, fetchUserData } from '../../store/actions';
import { wrapper } from '../../store/store';

import { useSelector } from 'react-redux';

const Settings = (props) => {

    const { updateUserData, fetchUserData, changePassword } = props;
    const userData = useSelector((state) => state.userData);

    useEffect(() => {
        // update userData on every render
        fetchUserData
    }, []);
    //TODO: Fix bug - UI probelm, potentially something about rehydration

    const { fullname, email, websites, subscription, billingInfo } = userData;

    const type=''; // settings/:type
    let header = type;
    header=header || 'account info';

    const renderMain = () => {
        if (type==='websites') {
            return <Websites websites={websites} updateData={updateUserData} />
        } else if (type==='billing') {
            return <Billing billingInfo={billingInfo} updateData={updateUserData}/>
        } else if (type==='subscription') {
            return <Subscription subscription={subscription} updateData={updateUserData}/>
        } else if (type==='invoices') {

        } else {
            return <AccountInfo name={fullname} email={email} updateData={updateUserData} />
        }
    }

    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <SettingsSide />
                </div>
                <div className={styles.main}>
                    <h2 className={styles.heading}>
                        {header}
                    </h2>
                    <hr />
                    {renderMain()}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserData: bindActionCreators(updateUserData, dispatch),
        changePassword: bindActionCreators(changePassword, dispatch),
        fetchUserData: bindActionCreators(fetchUserData, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Settings);
