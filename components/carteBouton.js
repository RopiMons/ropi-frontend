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

        <div className="col-6 col-md-4 col-lg-3 d-flex  align-self-stretch" >

            <Jumbotron className={"d-flex flex-column flex-grow-1 justify-content-between"
            +" align-items-stretch align-content-stretch align-self-stretch flex-wrap" }
                       style={{background: props.boutonColor}} >

                {/*<MDBIcon className={"text-center"} icon="store"/>*/}
                <MDBIcon className={"text-center"} icon={props.icone} size="4x"/>
                <p></p>
                <h4 className="text-center">{props.texte}</h4>

                <p className="text-center">{props.children}</p>

                <p className={"text-center"}>
                    <Button> {props.boutonText} </Button>
                </p>

            </Jumbotron>
        </div>

    )
}

export function CarteBoutonArray4(props) {

   return (
        <>
            {/*<h1>ESSai</h1>*/}

            <div className="container row d-flex flex-row" id="actions">

                        {props.boutonTitleArray.map((boutonTexte, key) => {
                            return (
                                <>
                                        <CarteBouton texte={boutonTexte}
                                                     icone={props.boutonIconArray[key]}
                                                     key={key}
                                                     boutonText={props.boutonTextArray[key]}
                                                     boutonColor={props.boutonColorArray[key]} >
                                            {/*Je suis le children*/}
                                            {props.boutonContentArray[key]}
                                        </CarteBouton>
                                </>
                            );
                        })}

            </div>
            {/*<CarteBouton texte={"Je suis une fantôme"}>
                Je suis le children
            </CarteBouton>*/}
        </>


    )
}