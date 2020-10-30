import Head from "next/head";

import React from "react";
import {Row, Container, Col, Table, Navbar, Nav, Jumbotron, Button} from "react-bootstrap";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBIcon} from "mdbreact";

import styles from './ropi_base.module.css'

// react-bootsrap documentation
//https://react-bootstrap.github.io/layout/grid/


/* **********************************************************
Création de 4 boutons Jumbotron en ligne, bootstrapés
********************************************************** */


export default function CarteBouton(props) {

    const divStyle = {
        color: props.boutonTextColor,
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
        width: 'auto',
        height: 100,
    };

    const iconStyle = {
        marginLeft: 16
    };


    return (

        <div className="col-6 col-md-4 col-lg-3 d-flex  align-self-stretch" >

            <Jumbotron className={"d-flex flex-column flex-grow-1 justify-content-between"
            +" align-items-stretch align-content-stretch align-self-stretch flex-wrap" }
                       style={divStyle}  >


                {props.icone ? (
                    // https://mdbootstrap.com/docs/jquery/content/icons-list/?
                    <MDBIcon className={"text-center"} icon={props.icone} size="4x"/>
                ) : (
                    <Row className="text-center">
                        <Col>

                        <img className={"text-center"} src={props.logo} style={imgStyle} alt={props.imageAlt} />
                        </Col>
                    </Row>

                )}

                <p></p>
                <h4 className="text-center">{props.texte}</h4>

                <p className="text-center">{props.children}</p>

                {/*Display default link button*/}
                <p className={"text-center"}>
                    <Button variant="light">
                        <a href={props.boutonLienWWW1}
                           className="link text-decoration-none">

                            {/*Afficher icone si disponible, sinon texte */}
                            {props.boutonIcon1 ? (
                                <MDBIcon className={"text-center"} fab icon={props.boutonIcon1} size="2x"/>
                            ) : (props.boutonText1)}

                        </a>
                    </Button>

                    {/*if more link button are defined, display them*/}
                    {props.boutonText2 ? (

                        <Button variant="light" style={iconStyle}>
                            <a href={props.boutonLienWWW2}
                               className="link text-decoration-none">
                                {/*Afficher icone si disponible, sinon texte */}
                                {props.boutonIcon1 ? (
                                    <MDBIcon className={"text-center"}  fab icon={props.boutonIcon2} size="2x"/>
                                ) : (props.boutonText2)}

                            </a>
                        </Button>
                    ) : (<></>)}

                </p>

            </Jumbotron>
        </div>

    )
}

export function CarteBoutonArray4(props) {

    return (


        //<Container className="row d-flex flex-row" id="actions">
        <>
            {props.boutonTitleArray.map((boutonTexte, key) => {
                return (
                    <>
                        <CarteBouton texte={boutonTexte}
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
                                     boutonLienWWW2={props.boutonLienWWWArray2 ? (props.boutonLienWWWArray2[key]) :("")}>
                            {/*Je suis le children*/}
                            {props.boutonContentArray[key]}
                        </CarteBouton>
                    </>
                );
            })}
        </>
        //</Container>


    )
}