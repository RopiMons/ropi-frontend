import Head from "next/head";
import React from "react";
import {Row, Container, Col, Table}  from "react-bootstrap";
import Menu from "./menu";
import BannerRopi from "./banner-ropi";
import FooterRopi from "./footer-ropi";
import styles from './css/index-layout.module.css';
import { View, Image, StyleSheet } from 'react-native';

export default function IndexLayout({children, menu}){

    const fond = {      
        backgroundImage: 'linear-gradient(rgba(211, 255, 222, 0.8), rgba(255, 255, 150, 0.8)), url("/images/ROPI_WEB_BG_BL.png")',
        //backgroundColor: 'rgba(245,250,250,0.7)',
        mixBlendMode: 'multiply'
      }  

      const contenu = {
          paddingTop: 30,
      }

    return(
        <div style={fond}>
            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            </Head>
            <Container style={contenu}>
                {/* <Image  style={{ height: 300 }} resizeMode="contain" source="/images/banner01.png"/> */}
                <BannerRopi />
                <Menu data={menu} />
                {children}
                <FooterRopi />
            </Container>
        </div>
    )
}
