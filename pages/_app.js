import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';


import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
          <ToastContainer />
      </Layout>
  )
}

export default MyApp
