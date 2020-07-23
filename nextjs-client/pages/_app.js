import '../styles.css';
import { wrapper } from '../store/store';
import { useRouter, withRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Login from './login';
import {useEffect} from 'react';
import ProtectedRoute from '../hoc/ProtectedRoute';

function MyApp({ Component, pageProps, router }) {
    const { pathname, isSsr } = router;

    const isRouteProtected = pathname.startsWith('/dashboard');

    if (isRouteProtected) {
        return <ProtectedRoute Component={Component} pageProps={pageProps} />;
    }
    return <Component {...pageProps} />
}

export default wrapper.withRedux(withRouter(MyApp));
