import '../styles.css';
import { wrapper } from '../store/store';

// This default export is required in a new `pages/_app.js` file.
function WrappedApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp);
