import '../styles.css';
import { wrapper } from '../store/store';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../hoc/ProtectedRoute';
import {useEffect} from 'react';

function MyApp({ Component, pageProps,  }) {
    console.log('HIT _APP')
    const { router, pathname } = useRouter();
    const isRouteProtected = pathname.startsWith('/dashboard');

     if (isRouteProtected) {
        return <ProtectedRoute Component={Component} pageProps={pageProps} redirectTo={pathname} />;
    }
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
