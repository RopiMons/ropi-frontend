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
    return (

        <div className="col-6 col-md-3 d-flex  align-self-stretch" >

            <Jumbotron className={"d-flex flex-column flex-grow-1 justify-content-between"
            +" align-items-stretch align-content-stretch align-self-stretch flex-wrap" }
                       style={{background: props.boutonColor}} >

                {/*<MDBIcon className={"text-center"} icon="store"/>*/}
                <MDBIcon className={"text-center"} icon={props.icone} size="4x"/>
                <h4 className="text-center">{props.texte}</h4>

                <p className="text-center">{props.children}</p>

                <p className={"text-center"}>
                    <Button> {props.boutonText} </Button>
                </p>

            </Jumbotron>
        </div>

    )
}

export function CarteBoutonArray4({children, props}) {
    const boutonIconArray = ["university", "store","user-circle","users"];
    const boutonTitleArray = ['Obtenir des Ropi', 'Dépenser ses Ropi', 'Devenir partenaire', 'Devenir bénévole'];
    const boutonContentArray = [
        'Commander des billets de Ropi ou accéder à mon portefeuille de Ropi électroniques',
        'Chercher les commerces prestataires du Ropi',
        'Devenir un commerce partenaire et bénéficier des avantages du réseau ',
        'Participer à l\'évolution et devenir membre de l\'asbl Ropi.'];
    const boutonTextArray = ["Ropi banking", "Rechercher", "Adhérer", "Aider"];
    const boutonColorArray = ["#ffa7a4", "#fed18d", "#abb4f0", "#93e6da"];


    return (
        <>
            {/*<h1>ESSai</h1>*/}

            <div className="container" id="actions">
                <div className="row d-flex flex-row">

                        {boutonTitleArray.map((boutonTexte, key) => {
                            return (
                                <>
                                        <CarteBouton texte={boutonTexte}
                                                     icone={boutonIconArray[key]}
                                                     boutonText={boutonTextArray[key]}
                                                     boutonColor={boutonColorArray[key]} >
                                            {/*Je suis le children*/}
                                            {boutonContentArray[key]}
                                        </CarteBouton>
                                </>
                            );
                        })}

                </div>
            </div>
            {/*<CarteBouton texte={"Je suis une fantôme"}>
                Je suis le children
            </CarteBouton>*/}
        </>


    )
}