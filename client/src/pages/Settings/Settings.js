import React, { useState, useEffect } from 'react';
import styles from './Settings.module.css';
import SettingsSide from '../../components/SettingsSide/SettingsSide';

import AccountInfo from '../../components/AccountInfo/AccountInfo';
import Websites from '../../components/Websites/Websites';
import Billing from '../../components/Billing/Billing';
import Subscription from '../../components/Subscription/Subscription';

import Nav from '../../components/Nav/Nav';

import { connect } from 'react-redux';

import { updateUserData } from '../../store/actions';


const Settings = ({id, match, userData, updateUserData}) => {
    
    id=id.id;
    const { type } = match.params;

    const [data, setData] = useState({ userData });

    const { name, email, websites, subscription, billingInfo } = userData;

    
    const renderMain = () => {
        if (type==='websites') {
            return <Websites websites={websites} updateData={updateUserData} />
        } else if (type==='billing') {
            return <Billing billingInfo={billingInfo} updateData={updateUserData}/>
        } else if (type==='subscription') {
            return <Subscription subscription={subscription} updateData={updateUserData}/>
        } else if (type==='invoices') {
            
        } else {
            return <AccountInfo name={name} email={email} updateData={updateUserData} />
        }
    }

    let header = 'settings';
    if (type==='websites') {
        header = 'websites';
    } else if (type==='billing') {
        header = 'billing';
    } else if (type==='subscription') {
        header = 'subscription';
    } else if (type==='invoices') {
        header = 'invoices';
    } else {
        header="account info"
    }

    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <SettingsSide id={id} />
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

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { updateUserData })(Settings);