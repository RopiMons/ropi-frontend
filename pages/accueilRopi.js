import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

import BlogRopi from "../components/blog-ropi.js";
import Carte2Col from "../components/carte2Col";

import {CarteBoutonAccueil} from "../components/carte4Col";


function AccueilRopi(props){
    const ActionIconArray = ["university", "store","user-circle","users"];
    const ActionLogoImageArray =["","","",""];
    const ActionTitleArray = ['Obtenir des Ropi', 'Dépenser ses Ropi', 'Devenir partenaire', 'Devenir bénévole'];
    const ActionContentArray = [
        'Commander des billets de Ropi ou accéder à mon portefeuille de Ropi électroniques',
        'Chercher les commerces prestataires du Ropi',
        'Devenir un commerce partenaire et bénéficier des avantages du réseau ',
        'Participer à l\'évolution et devenir membre de l\'asbl Ropi.'];

    const ActionColorArray = ["#ffa7a4", "#fed18d", "#abb4f0", "#93e6da"];
    const ActionImageArray = ["","","","",""];
    // boutons liens à cliquer
    const ActionTextColorArray = ["black", "black", "black", "black"];
    const ActionTextArray1 = ["Ropi banking", "Rechercher", "Adhérer", "Aider"];
    const ActionIconArray1 = ["facebook-square", "", "", ""];
    const ActionButtonLienWWWArray1 = [ "internal_link", "http://www.google.be", "www.google.be", "www.google.be"];
    //const ActionTextArray2 = ["", "", "", ""];
    //const ActionButtonLienWWWArray2 = [ "", "", "", ""];


    const texte = ["Nos valeurs pour une transition écologique et sociale ",
        "Pourquoi une monnaie complémentaire à Mons ? Comment ça marche ?"];
    /* 1ère image : colonne de gauche
    2ème et 3ème image (vidéo) : colonne de droite     */
    const imageIncluse = ["images/valeurs_alpha.png",
        "images/illu_ropi.png", "https://www.youtube.com/embed/7-s_wIoMC9I"];

    return(
        <>
        {/* Passer à l'action*/}
                <Container className="py-xl-5" id="passez-action">
                    <h2 className="text-center my-3">Le Ropi en pratique</h2>
                    <h4 className="text-center subtitle font-weight-normal">Le Ropi n&#39;attend que vous pour relocaliser l&#39;économie. Il existe plein de façons de participer !</h4>
                </Container>
                <Row className="d-flex flex-row" id="actions">
                    <CarteBoutonAccueil
                        boutonIconArray={ActionIconArray}
                        boutonLogoImageArray={ActionLogoImageArray}
                        boutonTitleArray={ActionTitleArray}
                        boutonContentArray={ActionContentArray}

                        boutonBackgroundColorArray={ActionColorArray}
                        boutonBackgroundImageArray={ActionImageArray}
                        // boutons liens à cliquer
                        boutonTextColorArray={ActionTextColorArray}
                        boutonTextArray1={ActionTextArray1}
                        boutonIconArray1={ActionIconArray1}
                        boutonLienWWWArray1={ActionButtonLienWWWArray1}>

                    </CarteBoutonAccueil>
                </Row>


                {/* Information générale.*/}
                <Container className="py-xl-5" id="quoi">
                    <h2 className="text-center my-3">A propos du Ropi</h2>
                    <h4 className="text-center subtitle font-weight-normal">Vous avez entendu parler du Ropi mais vous
                        vous demandez ce qui nous anime et à quoi cela peut-il bien servir ? Découvrez le en texte,
                        schéma interactif et video ci-dessous!</h4>
                </Container>

                <Carte2Col
                    carteGauche={
                    <>
                        <h5> {texte[0]} <br/><br/></h5>

                        <img className="img-fluid" id="valeurs" src={imageIncluse[0]}/>

                        <p></p>
                        <p className="align-self-center">
                            <a className="btn btn-primary" role="button">En savoir plus</a>
                        </p>
                    </>}

                    carteDroite={
                    <>
                        <h5>{texte[1]}</h5>

                        <Row>
                            <Col className="col-lg-5">
                                <img className="img-fluid" id="carte-interactive"
                                     src={imageIncluse[1]}/>
                            </Col>
                            <Col className="text-center d-none d-lg-inline align-self-center">
                                <iframe allowFullScreen frameBorder="0"
                                        src={imageIncluse[2]}
                                        className="justify-content-start" id="video-mc"
                                />
                            </Col>
                        </Row>
                        <br />
                        <p className="align-self-center">
                            <Button variant={'primary'} className="flex-column">En savoir plus</Button>
                        </p>
                    </>}>
                </Carte2Col>
                <BlogRopi messageId={props.messageId} />
        </>
    )
}

export async function getStaticProps(context){

    /* Obtain the page id of the Ropi facebook page and the last message id */

    let messageId = null;   // the facebook  id of the latest published message 
    
        await fetch('https://graph.facebook.com/v9.0/'+process.env.FB_PAGEID+'/feed?access_token='+process.env.FB_SECRET).then(
         async (result) => {
            await result.json().then(json => {

                 /* usefull regex generation tool https://regex101.com/ 
                 In the returned json string, the "id" = idPage_idPostedMessage
                 So we extract the 2nd number after the underscore (=idPostedMessage)
                  */
                messageId = json.data[0].id.replace(/(\d*)_(\d*)/gm, `$2`);
            })
        
        }   
        );
    return {
        props: {messageId : messageId},// will be passed to the page component as props
      }
}

export default AccueilRopi;