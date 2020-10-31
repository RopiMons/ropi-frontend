import React from "react";
import Head from "next/head";
import {Container, Row, Col} from "react-bootstrap";

import styles from '../components/ropi_base.module.css';

import BannerRopi from "../components/banner-ropi";
import MenuRopi from "../components/menu-ropi";
import FooterRopi from "../components/footer-ropi";
import Carte2Col from "../components/carte2Col";

import Carte4Col, {CarteBoutonListeCommerces} from "../components/carte4Col";
import dynamic from "next/dynamic";

//https://react-leaflet.js.org/

//https://github.com/rajeshdh/react-leaflet-with-nextjs/blob/master/components/map.js
const MapWithNoSSR = dynamic(() => import('./../components/map'),{ssr:false});




export default function CommerceRopi(props) {

    /* Construction de la liste des commerçants
     *  A lier à la base de donnée TODO LOLO
     *  */
    const myImgStyle = {
        border: 1
        //border: 1px solid black"
    };

    const myMapColStyle = {};

    const commerces =
        [
            {
                backgroundImage: "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
                logoImage: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
                textColor: "white",
                Title: "Les Halles",
                Content: "Acheter du bon miamiam",
                liensWWW: ["http://www.google.be", "http://www.facebook.com", "http://www.google.be"],
                comptoirChange: true,
            },
            {
                backgroundImage: "url(images/commerces/fondsPetitMarais_ImageBgd.jpg)",
                logoImage: "images/commerces/fondsPetitMarais_Logo.png",
                textColor: "white",
                Title: "Les fodnus",
                Content: "La petite maison dans la forêt",
                liensWWW: ["http://www.google.be", "http://www.facebook.com", "http://www.google.be"],
                comptoirChange: false,
            }
        ];


    const defaultIcon = "store"; //https://mdbootstrap.com/docs/react/content/icons-list/
    const defaultButtonText = "boutonTexte";
    const defaultIconeWWW = "affiliatetheme";
    const defaultIconeFacebook = "fab fa-facebook-square";
    const defaultBackgroundColor = "#9b9b9b";

    const position = [51.505, -0.09];  // ongoing for openstreetmap


    return (
        <>
            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            </Head>
            <body>
            <Container>

                <BannerRopi> </BannerRopi>

                <MenuRopi> </MenuRopi>


                <div className="container py-xl-5" id="passez-action">
                    <h2 className="text-center my-3">Les prestaires</h2>
                    <h4 className="text-center subtitle font-weight-normal">
                        Les commerçants, prestataires et associations qui acceptent le Ropi</h4>
                </div>


                <Carte2Col
                    carteGauche={
                        <>
                            <h5> Filtre <br/><br/></h5>

                            <form>
                                <label>
                                    Code postal :
                                    <input type="text" name="name"/>
                                </label>
                                <label>
                                    Nom et description :
                                    <input type="text" name="name"/>
                                </label>
                                <input type="submit" value="Envoyer"/>
                            </form>

                        </>}

                    carteDroite={
                        <>
                            <Row className={"justify-content-between align-items-center d-md-flex"}>
                                <Col style={myMapColStyle}>

                                    <div className="embed-responsive embed-responsive-16by9">
                                        <MapWithNoSSR/>

                                        {/*https://blog.theodo.com/2018/01/responsive-iframes-css-trick/*/}
                                        {/*https://medium.com/@nargessmi87/how-to-embede-open-street-map-in-a-webpage-like-google-maps-8968fdad7fe4*/}
                                        {/* <iframe className="embed-responsive-item"  frameBorder="0" scrolling="no" marginHeight="0"
                                                marginWidth="0"
                                                src="https://www.openstreetmap.org/export/embed.html?bbox=3.761100769042969%2C50.37678049818248%2C4.061164855957032%2C50.52521422853901&amp;layer=mapnik"
                                                style={myImgStyle}></iframe>*/}
                                    </div>

                                </Col>
                            </Row>
                            <br/><small><a href="https://www.openstreetmap.org/#map=12/50.4511/3.9111">Afficher une
                            carte plus grande</a></small>

                        </>}>
                </Carte2Col>


                <Container className="row d-flex flex-row" id="actions">

                    <Carte4Col texte="Ajouter mon commerce"
                               icone='plus'
                               logo=''

                               boutonTextColor={'#ffffff'}
                               boutonBackgroundColor={'#7f7cff'}
                               boutonBackgroundImage=''
                               boutonText1={'Ajouter mon commerce'}
                               boutonLienWWW1={"internal_link_ajouter_commerce"}>
                        {/*Je suis le children*/}
                    </Carte4Col>

                    <CarteBoutonListeCommerces
                        commerces={commerces}>
                    </CarteBoutonListeCommerces>

                </Container>
                {/*boutonBackgroundImage="images/commercesLogo/fondsPetitMarais.jpg"*/}


                <FooterRopi> </FooterRopi>

            </Container>
            </body>
        </>
    )


}