import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css';
import React from "react";
import IndexLayout from "../layout/index-layout";
import '@fortawesome/fontawesome-free/css/all.min.css';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <IndexLayout>
            <Component {...pageProps} />
        </IndexLayout>
    )
}
