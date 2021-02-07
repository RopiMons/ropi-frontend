import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css';
import React from "react";
import IndexLayout from "../layout/index-layout";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ApiCaller from "../components/services/ApiCaller";


// This default export is required in a new `pages/_app.js` file.
function MyApp({Component, pageProps}) {
    let indexProps = pageProps.menu ? pageProps.menu : false;
    return (
        <IndexLayout menu={indexProps}>
            <Component {...pageProps} />
        </IndexLayout>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {

    let pageProps = {};
    let menu = false;

    await ApiCaller.getMenu().then(response => {
        if (response.status === 200 && response.json['hydra:member'] && response.json['@type'] && response.json['@type'] === 'hydra:Collection') {
            menu = response.json['hydra:member'];
        }

    })

    // Load the page getInitiaProps
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({...ctx});
    }

    return {pageProps: {...pageProps, menu}};
}

export default MyApp;
