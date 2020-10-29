import React from "react";
import Head from "next/head";
import {Container, Row} from "react-bootstrap";

import styles from '../components/ropi_base.module.css';

import BannerRopi from "../components/banner-ropi";
import MenuRopi from "../components/menu-ropi";
import FooterRopi from "../components/footer-ropi";
import BlogRopi from "../components/blog-ropi.js";

import CarteBouton, {CarteBoutonArray4} from "../components/carteBouton";


export default function AccueilRopi(props){

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

                <div className="container py-5" id="passez-action">
                    <h3 className="text-center my-3">Le Ropi en pratique</h3>
                    <h6 className="text-center subtitle font-weight-normal">Le Ropi n&#39;attend que vous pour
                        relocaliser l&#39;économie. Il existe plein de façons de participer !</h6>
                </div>

                {/*Boutons pour passer à l'action*/}
                 <CarteBoutonArray4> </CarteBoutonArray4>

                <div className="container py-5" id="quoi">
                    <h3 className="text-center my-3">A propos du Ropi</h3>
                    <h6 className="text-center subtitle font-weight-normal">Vous avez entendu parler du Ropi mais vous
                        vous demandez ce qui nous anime et à quoi cela peut-il bien servir ? Découvrez le en texte,
                        schéma interactif et video ci-dessous!</h6>
                </div>


                {/*Information générale. TODO FACTORISER */}
                <div className="container" id="core">
                    <div className="row d-md-flex align-items-stretch align-items-md-end">

                        <div className="col-md-4 d-md-flex align-self-stretch align-items-md-end">
                            <div className="jumbotron d-flex flex-column flex-grow-1 justify-content-between justify-content-around align-self-stretch" id="valeurs">
                                <h5>Nos valeurs pour une transition écologique et sociale <br/><br/></h5>


                                <img className="img-fluid" id="valeurs" src="images/valeurs_alpha.png"/>

                                <p className="align-self-center">
                                    <a className="btn btn-primary" role="button">En savoir plus</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-8 d-md-flex align-self-stretch align-items-md-end">
                            <div className="jumbotron d-flex flex-column flex-grow-1 justify-content-between align-content-around align-self-stretch"
                                id="pourquoi">
                                <h5>Pourquoi une monnaie complémentaire à Mons ? Comment ça marche ?</h5>


                                <div className="row">
                                    <div className="col-lg-5">
                                        <img className="img-fluid" id="carte-interactive"
                                             src="images/illu_ropi.png"/>
                                    </div>
                                    <div className="col text-center d-none d-lg-inline align-self-center">
                                        <iframe allowFullScreen frameBorder="0"
                                                src="https://www.youtube.com/embed/7-s_wIoMC9I"
                                                className="justify-content-start" id="video-mc"></iframe>
                                    </div>
                                </div>


                                <p className="align-self-center">
                                    <a className="btn btn-primary flex-column" role="button">En savoir plus</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <BlogRopi> </BlogRopi>

                <FooterRopi>  </FooterRopi>

            </Container>
            </body>
        </>
    )


}