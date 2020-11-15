import Head from "next/head";;
import React from "react";
import  {Row, Container, Col, Table} from "react-bootstrap";
import styles from './css/index-layout.module.css';
import Menu from "./menu";
import BannerRopi from "./banner-ropi";
import FooterRopi from "./footer-ropi";
import LoadFacebookSDKjs from "../components/embedFacebookRopiAsbl";

export default function IndexLayout({children, menu}){
    return(
        <>
            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            </Head>
            <body>

            {/*<LoadFacebookSDKjs> </LoadFacebookSDKjs>*/}

            <Container>
                <BannerRopi />
                <Menu data={menu} />
                {children}
                <FooterRopi />
            </Container>
            </body>
        </>
    )
}
