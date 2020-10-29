import Head from "next/head";;
import React from "react";
import  {Row, Container, Col, Table, Navbar, Nav} from "react-bootstrap";
import styles from '../components/ropi_base.module.css';
import BannerRopi from "../components/banner-ropi";
import MenuRopi from "../components/menu-ropi";
import FooterRopi from "../components/footer-ropi";

export default function Essai({children, props}){
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



                <FooterRopi>

                </FooterRopi>

            </Container>
            </body>
        </>
    )
}


