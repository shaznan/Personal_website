import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { Fragment, useEffect } from "react";

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
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
