import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter, withRouter } from 'next/router';

import Login from '../pages/login';

const ProtectedRoute = ({ Component, pageProps, router }) => {
    const isAuthenticated = useSelector((state) => state.auth.user_id);
    console.log(router);
    if (!isAuthenticated){
        return <Login redirected={true} />;
    }
    return <Component {...pageProps} />
}


export default withRouter(ProtectedRoute);
