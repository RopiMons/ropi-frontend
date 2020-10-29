import React from "react";
import Head from "next/head";
import {Container} from "react-bootstrap";

import styles from '../components/ropi_base.module.css';

import BannerRopi from "../components/banner-ropi";
import MenuRopi from "../components/menu-ropi";
import FooterRopi from "../components/footer-ropi";
import CarteBouton, {CarteBoutonArray} from "../components/carteBouton";


export default function AccueilRopi(props){

    return(
        <>
            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            </Head>
            <body>
            <Container>

                <BannerRopi>

                </BannerRopi>

                <MenuRopi>

                </MenuRopi>

                <CarteBoutonArray> </CarteBoutonArray>


                <FooterRopi>

                </FooterRopi>

            </Container>
            </body>
        </>
    )


}