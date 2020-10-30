import React from "react";
import Head from "next/head";
import {Container, Row} from "react-bootstrap";

import styles from '../components/ropi_base.module.css';

import BannerRopi from "../components/banner-ropi";
import MenuRopi from "../components/menu-ropi";
import FooterRopi from "../components/footer-ropi";
import BlogRopi from "../components/blog-ropi.js";
import Carte2Col from "../components/carte2Col";

import CarteBouton, {CarteBoutonArray4} from "../components/carteBouton";


export default function CommerceRopi(props){

    /* Construction de la liste des commerçants
     *  A lier à la base de donnée TODO LOLO
     *  */
    const commerceIconArray = ["images/commercesLogo/logo1.jpg", "store","user-circle","users"
        , "store", "store", "store", "store", "store", "store"];
    const commerceTitleArray = ['Les Halles', 'Les Jeunesses', 'Les fondus', 'Les Ropieux'
        , 'autre commerce', 'autre commerce', 'autre commerce', 'autre commerce', 'autre commerce', 'autre commerce'];
    const commerceContentArray = [
        'Acheter du bon miamiam',
        'Devenir ingé en t\'amusant',
        'La petite maison dans la forêt',
        'Imprime ton fric',
        'Consomme', 'Consomme','Consomme', 'Consomme','Consomme', 'Consomme'];
    const commerceTextArray = ["todo", "todo", "todo3", "todo4", "todo5", "todo5", "todo5", "todo5", "todo5", "todo5"];
    const commerceColorArray = ["#ffa7a4", "#fed18d", "#abb4f0", "#93e6da", "#ffa7a4", "#fed18d", "#abb4f0", "#93e6da", "#ffa7a4", "#fed18d", "#abb4f0", "#93e6da"];


    return(
        <>
            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            </Head>
            <body>
            <Container>

                <BannerRopi> </BannerRopi>

                <MenuRopi>  </MenuRopi>


                <div className="container py-xl-5" id="passez-action">
                    <h2 className="text-center my-3">Les prestaires</h2>
                    <h4 className="text-center subtitle font-weight-normal">
                        Les commerçants, prestataires et associations qui acceptent le Ropi</h4>
                </div>



                <CarteBoutonArray4
                    boutonIconArray={commerceIconArray}
                    boutonTitleArray={commerceTitleArray}
                    boutonContentArray={commerceContentArray}
                    boutonTextArray={commerceTextArray}
                    boutonColorArray={commerceColorArray}>
                </CarteBoutonArray4>





                <FooterRopi> </FooterRopi>

            </Container>
            </body>
        </>
    )


}