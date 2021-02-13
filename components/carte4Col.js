import React from "react";
import {Button, Col, Jumbotron, Row} from "react-bootstrap";
import {MDBIcon} from "mdbreact";
import PropTypes from 'prop-types';
import color from "react-extra-prop-types/lib/color";

// react-bootsrap documentation
//https://react-bootstrap.github.io/layout/grid/


/* **********************************************************
Création de 4 boutons Jumbotron en ligne, bootstrapés
********************************************************** */

export default function Carte4Col(props) {

    const divStyle = {
        color: props.boutonTextColor ? props.boutonTextColor : '#ffffff',
        backgroundImage: props.boutonBackgroundImage,
        backgroundColor: props.boutonBackgroundColor,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
        //backgroundBlendMode: 'hard-light'
    };
    const imgStyle = {
        maxWidth: 140,
        maxHeight: 100,
        //width: 'auto',
        //height: 100,
    };
    const iconStyle = {
        marginLeft: 16
    };


    return (
        <Col className="col-6 col-md-4 col-lg-3 d-flex align-self-stretch" >

            <Jumbotron
                className={"d-flex flex-column flex-grow-1 justify-content-between align-items-stretch align-content-stretch align-self-stretch flex-wrap" }
                style={divStyle}
            >

                {props.logo ? (
                    <Row className="text-center">
                        <Col>
                            <img className={"text-center"} src={props.logo} style={imgStyle} alt={props.imageAlt}/>
                        </Col>
                    </Row>
                ) : (
                    // https://mdbootstrap.com/docs/jquery/content/icons-list/?
                    <MDBIcon className={"text-center"} icon={props.icone} size="4x"/>
                )}

                <br />
                <h4 className="text-center">{props.texte}</h4>
                <p className="text-center">{props.children}</p>

                {/*Display default link button*/}
                <p className={"text-center"}>
                    <Button variant="light">
                        <a
                            href={props.boutonLienWWW1 ? props.boutonLienWWW1 : '#'}
                            target="_blank"
                            className="link text-decoration-none"
                        >
                            {/*Afficher icone si disponible, sinon texte */}
                            {props.boutonIcon1 ? (
                                <MDBIcon className={"text-center"} fab icon={props.boutonIcon1} size="2x"/>
                            ) : (props.boutonText1)}
                        </a>
                    </Button>

                    {/*if more link button are defined, display them*/}
                    {props.boutonLienWWW2 && (
                        <Button variant="light" style={iconStyle}>
                            <a href={props.boutonLienWWW2 ? props.boutonLienWWW2 : '#'} target="_blank"
                               className="link text-decoration-none">
                                {/*Afficher icone si disponible, sinon texte */}
                                {props.boutonIcon1 ? (
                                    <MDBIcon className={"text-center"} fab icon={props.boutonIcon2} size="2x"/>
                                ) : (props.boutonText2)}
                            </a>
                        </Button>
                    )}
                </p>
            </Jumbotron>
        </Col>
    )
}

export function CarteBoutonAccueil(props) {

    return (
        <>
            {props.boutonTitleArray.map((boutonTexte, key) => {
                return (
                    <Carte4Col
                        key={key}
                        texte={boutonTexte}
                        // Icone ou logo. Si icone vide alors logo (image) est utilisé
                        icone={props.boutonIconArray[key]}
                        logo={props.boutonLogoImageArray[key]}

                        // Couleur de fond si pas d'image d'iamge de fond
                        boutonBackgroundImage={props.boutonBackgroundImageArray[key]}
                        boutonBackgroundColor={props.boutonBackgroundColorArray[key]}

                        // Bouton à cliquer avec lien
                        boutonTextColor={props.boutonTextColorArray[key]}
                        // Bouton 1 (principal)
                        boutonText1={props.boutonTextArray1[key]}
                        boutonIcon1={props.boutonIconArray1[key]}
                        boutonLienWWW1={props.boutonLienWWWArray1[key]}

                        // Bouton 2 (secondaire)
                        boutonText2={props.boutonTextArray2 ? (props.boutonTextArray2[key]) : ("")}
                        boutonIcon2={props.boutonIconArray2 ? (props.boutonIconArray2[key]) : ("")}
                        boutonLienWWW2={props.boutonLienWWWArray2 ? (props.boutonLienWWWArray2[key]) : ("")}>
                        {/*Je suis le children*/}
                        {props.boutonContentArray[key]}
                    </Carte4Col>
                );
            })}
        </>
    )
}

export function CarteBoutonListeCommerces(props) {
    return (
        <>
            {props.commerces.map((monCommerce, key) => {
                return (
                    <Carte4Col
                        key={key}
                        texte={monCommerce.nom}
                        comptoirChange={monCommerce.isComptoire}
                        icone={"store"}        // Icone ou logo.
                        logo={monCommerce.logo} // ... si icone vide alors logo (image) est utilisé

                        boutonBackgroundImage={'url(' + monCommerce.bgImage + ')'}  // Couleur de fond
                        boutonBackgroundColor={"#fceb99"}                   //  ... si pas d'image d'image de fond

                        boutonTextColor={monCommerce.textColor}
                        // Bouton 1 (principal)
                        boutonText1={""}
                        boutonIcon1={(monCommerce.liens && monCommerce.liens[0] && monCommerce.liens[0].url && !monCommerce.liens[0].url.includes("facebook")) ? ("affiliatetheme") : ("facebook-square")}
                        boutonLienWWW1={(monCommerce.liens && monCommerce.liens[0] && monCommerce.liens[0].url) ? monCommerce.liens[0].url : null}

                        // Bouton 2 (secondaire)
                        boutonText2={""}
                        boutonIcon2={(monCommerce.liens && monCommerce.liens[1] && monCommerce.liens[1].url && !monCommerce.liens[1].url.includes("facebook")) ? ("affiliatetheme") : ("facebook-square")}
                        boutonLienWWW2={(monCommerce.liens && monCommerce.liens[1] && monCommerce.liens[1].url) ? (monCommerce.liens[1].url) : null}>

                        {monCommerce.slogan ? monCommerce.slogan : null} {/*Je suis le children*/}
                    </Carte4Col>
                );
            })}
        </>
    )
}

CarteBoutonListeCommerces.propTypes = {
    commerces: PropTypes.arrayOf(PropTypes.shape({
        nom: PropTypes.string.isRequired,
        isComptoire: PropTypes.bool.isRequired,
        logo: PropTypes.string.isRequired,
        bgImage: PropTypes.string.isRequired,
        textColor: color.isRequired,
        slogan: PropTypes.string
    })).isRequired
}
