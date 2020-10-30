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

    // Take predefined icone as backup of Logo image if Icon is left empty("")
    const commerceIconArray = ["store", "store","","users", "store", "store", "store", "store", "store", "store"];
    //const commerceIconArray = []
    const commerceLogoImageArray = ["https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
        "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
        "images/commerces/fondsPetitMarais_Logo.png",
        "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
        "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
        "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
        "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg",
        "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg"];

    const commerceTextColorArray = ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"];
    const commerceTitleArray = ['Les Halles', 'Les Jeunesses', 'Les fondus', 'Les Ropieux'
        , 'autre commerce', 'autre commerce', 'autre commerce', 'autre commerce', 'autre commerce', 'autre commerce'];
    const commerceContentArray = [
        'Acheter du bon miamiam',
        'Devenir ingé en t\'amusant',
        'La petite maison dans la forêt',
        'Imprime ton fric',
        'Consomme', 'Consomme','Consomme', 'Consomme','Consomme', 'Consomme'];

    //https://mdbootstrap.com/docs/react/content/icons-list/
    const commerceButtonTextArray1 = ["todo", "todo", "todo3", "todo4", "todo5", "todo5", "todo5", "todo5", "todo5", "todo5"];
    const commerceButtonIconArray1 = ["affiliatetheme", "affiliatetheme", "affiliatetheme", "affiliatetheme", "fab fa-facebook-square", "todo5", "todo5", "todo5", "todo5", "todo5"];
    const commerceButtonLienWWWArray1 = [ "http://www.google.be", "http://www.google.be", "www.google.be", "www.google.be"];

    const commerceButtonTextArray2 = ["todo", "todo", "todo3", "todo4", "todo5", "todo5", "todo5", "todo5", "todo5", "todo5"];
    const commerceButtonIconArray2 = ["facebook-square", "facebook-square", "fab fa-facebook-square", "fab fa-facebook-square", "facebook-square", "todo5", "todo5", "todo5", "todo5", "todo5"];
    const commerceButtonLienWWWArray2 = [ "http://www.facebook.com", "http://www.facebook.com", "www.google.be", "www.google.be"];


    const commerceBackgroundColorArray = ["#9b9b9b", "#9b9b9b", "#9b9b9b", "#9b9b9b", "#9b9b9b", "#9b9b9b", "#9b9b9b", "#9b9b9b", "#ffe0e0", "#ffe8c1", "#dfe4ff", "#dafff8"];
    const commerceBackgroundImageArray = [
        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
        "url(images/commerces/fondsPetitMarais_ImageBgd.jpg)",
        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)",
        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg)"];

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



                <Container className="row d-flex flex-row" id="actions">

                    <CarteBouton texte="Ajouter mon commerce"
                                 icone='plus'
                                 logo=''

                                 boutonTextColor={'#ffffff'}
                                 boutonBackgroundColor={'#7f7cff'}
                                 boutonBackgroundImage=''
                                 boutonText1={'Ajouter mon commerce'}
                                 boutonLienWWW1={"internal_link_ajouter_commerce"}>
                        {/*Je suis le children*/}
                    </CarteBouton>

                    <CarteBoutonArray4
                        boutonIconArray={commerceIconArray}
                        boutonLogoImageArray={commerceLogoImageArray}
                        boutonTitleArray={commerceTitleArray}
                        boutonContentArray={commerceContentArray}
                        boutonTextColorArray={commerceTextColorArray}

                        boutonBackgroundColorArray={commerceBackgroundColorArray}
                        boutonBackgroundImageArray={commerceBackgroundImageArray}
                        // Bouton lien à cliquer
                        boutonTextArray1={commerceButtonTextArray1}
                        boutonIconArray1={commerceButtonIconArray1}
                        boutonLienWWWArray1={commerceButtonLienWWWArray1}

                        boutonTextArray2={commerceButtonTextArray2}
                        boutonIconArray2={commerceButtonIconArray2}
                        boutonLienWWWArray2={commerceButtonLienWWWArray2}>
                    </CarteBoutonArray4>
                </Container>
                {/*boutonBackgroundImage="images/commercesLogo/fondsPetitMarais.jpg"*/}



                <FooterRopi> </FooterRopi>

            </Container>
            </body>
        </>
    )


}