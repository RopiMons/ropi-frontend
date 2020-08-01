import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css';
import React from "react";
import {Container} from "react-bootstrap";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    )
}
