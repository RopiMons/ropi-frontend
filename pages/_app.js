import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css';
import React from "react";
import styles from '../components/ropi_base.module.css';
import AccueilRopi from "./accueilRopi";

import '@fortawesome/fontawesome-free/css/all.min.css';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (

            <Component {...pageProps} />

        )

}
