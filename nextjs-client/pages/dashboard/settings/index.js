import { useRouter } from 'next/router';
import Nav from '../../../components/Nav/Nav';
import SettingsSide from '../../../components/SettingsSide/SettingsSide';
import Websites from '../../../components/Websites/Websites';
import Billing from '../../../components/Billing/Billing';
import AccountInfo from '../../../components/AccountInfo/AccountInfo';
import Invoices from '../../../components/Invoices/Invoices';

import DefaultErrorPage from 'next/error'

import Subscription from '../../../components/Subscription/Subscription';
import { useEffect } from 'react';
import { fetchUserData, updateUserData, changePassword } from '../../../store/actions';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import styles from '../../styles/settings.module.css';

const RenderMain = ({ type, websites, billingInfo, subscription, fullname, email, updateData }) => {
    switch(type) {
        case undefined:
            return <AccountInfo name={fullname} email={email} updateData={updateUserData} />
        case 'websites':
            return <Websites websites={websites} updateData={updateUserData} />
        case 'billing':
            return <Billing billingInfo={billingInfo} updateData={updateUserData}/>
        case 'subscription':
            return <Subscription subscription={subscription} updateData={updateUserData}/>
        case 'invoices':
            return <Invoices />
        default:
            return <DefaultErrorPage statusCode={404} />
    }
}

const Settings = ({ updateUserData, fetchUserData }) => {
    const router = useRouter();
    const { type } = router.query;
    let header = type;
    header=header || 'account info';
    const availableTypes = ['websites', 'billing', 'subscription', 'invoices', undefined];

    if (!availableTypes.includes(type)) return <DefaultErrorPage statusCode={404} />;

    const userData = useSelector((state) => state.userData);

    useEffect(() => {
        if(availableTypes.includes(type)) {
            fetchUserData();
        }
    }, []);
    //TODO: Fix bug - UI breaking probelm, potentially something about rehydration

    const renderMainProps = {...userData, type: type, updateData: updateUserData};
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
                    <RenderMain {...renderMainProps} />
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
