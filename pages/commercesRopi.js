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
//https://medium.com/@nargessmi87/how-to-embede-open-street-map-in-a-webpage-like-google-maps-8968fdad7fe4
//https://github.com/rajeshdh/react-leaflet-with-nextjs/blob/master/components/map.js
const MapWithNoSSR = dynamic(() => import('./../components/openStreetMap'),{ssr:false});




export default function CommerceRopi(props) {

    /* Construction de la liste des commerçants
     *  A lier à la base de donnée TODO LOLO
     *  */
    const myImgStyle = {
        border: 1
        //border: 1px solid black"
    };

    const myMapColStyle = {};

    /*const commerces =
        [
            {
                backgroundImage: "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
         logoImage: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
        text_color       textColor: "white",
               nomCommerce: "Les Halles",
                slogan: "Acheter du bon miamiam",
            liensWWW: ["https://www.leshallesdumanege.be/", "https://www.facebook.com/farm.leshallescooperatives"],
            comptoirChange: true,
            },
            {
                backgroundImage: "url(images/commerces/fondsPetitMarais_ImageBgd.jpg)",
                logoImage: "images/commerces/fondsPetitMarais_Logo.png",
                textColor: "white",
                nomCommerce: "Les Fondus",
                slogan: "La petite maison dans la forêt",
                liensWWW: ["http://www.lesfondusdupetitmarais.be/", "https://www.facebook.com/habitatpetitmarais"],
                comptoirChange: false,
            }
        ];*/

    const commercesJson =
        '[{"id": 1, ' +
        '"nom": "Ropi ASBL",' +
        '"slogan": "Payez en argent comptant !",' +
            '"text_color": "#ffffff",' +
            '"logo": "https://ropi.be/img/ropi_logo.png",' +
            '"created_at": "2020-10-31T12:32:05+01:00",' +
            '"update_at": "2020-10-31T12:32:05+01:00",' +
            '"lat": 50.4552629,' +
            '"lon": 3.9510846,' +
            '"liens": [' +
            '    {' +
            '        "url": "https://www.ropi.be",' +
            '        "commentaire": ""' +
            '    },' +
            '    {' +
            '        "url": "https://www.facebook.com/RopiAsbl",' +
            '        "commentaire": ""' +
            '    }' +
            '],' +
            '"adresses": [' +
            '    {' +
            '        "rue": "Chemin du Ropi",' +
            '        "numero": "32",' +
            '        "ville": {' +
            '            "code_postal": "7000",' +
            '            "ville": "Mons"' +
             '       },' +
             '       "pays": {' +
             '           "nom": "Belgique",' +
             '           "nom_court": "Be"' +

             '       }' +
             '   }' +
            '],' +
            '"bg_image": "http://ropi.be/img/ROPI_WEB_BG_BL.png",' +
            '"is_comptoire": false' +
        '},' +
        '{' +
        '    "id": 2,' +
        '    "nom": "Fonds du petit marais",' +
        '    "slogan": "Lieu de vie communautaire et démocratique",' +
         '   "text_color": "#ffffff",' +
         '   "logo": "http://mfs0.cdnsw.com/fs/Root/small/al5b0-logo_fcj.png",' +
         '   "created_at": "2020-10-31T12:32:05+01:00",' +
         '   "update_at": "2020-10-31T12:32:05+01:00",' +
         '   "lat": 50.455242,' +
         '   "lon": 3.893146,' +
         '   "liens": [' +
         '       {' +
         '           "url": "https://www.facebook.com/habitatpetitmarais"' +
          '      },' +
          '      {' +
          '          "url": "http://www.lesfondusdupetitmarais.be"' +
          '      }' +
          '  ],' +
          '  "adresses": [' +
          '      {' +
          '          "rue": "Rue de Ghlin",' +
          '          "numero": "24",' +
          '          "ville": {' +
           '             "code_postal": "7012",' +
           '             "ville": "Jemappes"' +
           '         },' +
           '         "pays": {' +
           '             "nom": "Belgique",' +
           '             "nom_court": "Be"' +
           '         }' +
           '     }' +
            '],' +
            '"bg_image": "http://mfs0.cdnsw.com/fs/Root/large/d1fd0-IMG_20150820_191811.jpg",' +
            '"is_comptoire": true }]';


    const commerces = JSON.parse(commercesJson);


    const defaultIcon = "store"; //https://mdbootstrap.com/docs/react/content/icons-list/
    const defaultButtonText = "boutonTexte";
    const defaultIconeWWW = "affiliatetheme";
    const defaultIconeFacebook = "fab fa-facebook-square";
    const defaultBackgroundColor = "#9b9b9b";

    const position = [51.505, -0.09];  // ongoing for openstreetmap

    const mapDivStyle={
        height: "100 px",
        background: "#56854c",
        margin: "10px",
        color: "white"
    };

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
                    <h2 className="text-center my-3">Les prestataires qui acceptent le Ropi</h2>
                    <h4 className="text-center subtitle font-weight-normal">
                        Commerçants, prestataires et associations </h4>
                </div>


                <Carte2Col
                    carteGauche={
                        <>
                            <h5> Filtrez les prestataires selon différents critères <br/><br/></h5>

                            <form>
                                <label>
                                    Nom et description (texte libre):
                                    <input type="text" name="freeText"/>
                                </label>
                                <label>
                                    Code postal :
                                    <input type="text" name="postalCode"/>
                                </label>

                                <label>
                                    Types de commerce :
                                    <input type="text" name="prestataireType"/>
                                </label>

                                <br></br>
                                <input type="submit" value="Filtrer"/>
                            </form>

                        </>}

                    carteDroite={
                        <>
                            <Row className={"justify-content-between align-items-center d-md-flex"}>
                                <Col style={myMapColStyle}>

                                    <div className="embed-responsive " style ={mapDivStyle}>
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

                </Container>
                {/*boutonBackgroundImage="images/commercesLogo/fondsPetitMarais.jpg"*/}


                <FooterRopi> </FooterRopi>

            </Container>
            </body>
        </>
    )


}