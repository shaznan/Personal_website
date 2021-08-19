import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { Fragment, useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" type="image/jpg" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
