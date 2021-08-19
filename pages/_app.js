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
        <link
          rel="shortcut icon"
          href="https://github.com/shaznan/Shaznan-Graphic-and-Motion-graphic-portfolio-2021/blob/d9a2d8a82afcf2fccf7b0d4a3cd7391434c23953/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
