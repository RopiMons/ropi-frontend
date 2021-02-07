import Head from "next/head";
import React from "react";
import {Container} from "react-bootstrap";
import Menu from "./menu";
import BannerRopi from "./banner-ropi";
import FooterRopi from "./footer-ropi";

export default function IndexLayout({children, menu}){
    return(
        <div>
            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            </Head>
            <Container>
                <BannerRopi/>
                <Menu data={menu}/>
                {children}
                <FooterRopi/>
            </Container>
        </div>
    )
}
