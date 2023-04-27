import Layout from '../components/layout/Layout';
import '../styles/globals.css';

// Componenet handle like which page needs to renderd
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
