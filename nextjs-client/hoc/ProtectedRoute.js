import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useRouter, withRouter } from 'next/router';
import Router from 'next/router'
import Login from '../pages/login';

const ProtectedRoute = ({ Component, pageProps, router, redirectTo }) => {
    const isAuthenticated = useSelector((state) => state.auth.user_id);
    useEffect(() => {
        if (!isAuthenticated) {
            //window.location.pathname='/login';
            window.history.pushState(null, null, '/login');
            //Router.push('/login', '/login', { shallow: true });
        }
    }, []);

    if (!isAuthenticated){
        return <Login redirected={true} redirectTo={redirectTo} redirectPageProps={pageProps} />;
    }
    return <Component {...pageProps} />
}


export default withRouter(ProtectedRoute);
