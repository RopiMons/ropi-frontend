import Head from "next/head";;
import React from "react";
import  {Row, Container, Col, Table} from "react-bootstrap";
import styles from './css/index-layout.module.css';
import Menu from "./menu";
import BannerRopi from "./banner-ropi";
import FooterRopi from "./footer-ropi";
import { View, Image, StyleSheet } from 'react-native';

export default function IndexLayout({children, menu}){
    return(
        <>
        

            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />       
            </Head>
            <body>

            <Container>
                <Image  style={{ height: 300 }} resizeMode="contain" source="/images/banner01.png"/>  
                <BannerRopi />
                <Menu data={menu} />
                {children}
                <FooterRopi />
            </Container>
            </body>
        </>
    )
}
