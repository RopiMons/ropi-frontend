import Head from "next/head";;
import React from "react";
import  {Row, Container, Col, Table, Navbar, Nav, Jumbotron, Button} from "react-bootstrap";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBIcon} from "mdbreact";

import styles from './ropi_base.module.css'

// react-bootsrap documentation
//https://react-bootstrap.github.io/layout/grid/

export default function CarteBouton(props) {
    return (

        <Jumbotron className={"d-flex flex-column flex-grow-1 justify-content-between align-items-stretch " +
        "align-content-stretch align-self-stretch flex-wrap actions"}>

            <MDBIcon className={"text-center"} icon="store"/>

            <h4 className="text-center">{props.texte}</h4>

            <p className="text-center">{props.children}</p>

            <p className={"text-center"}>
                <Button> Rechercher </Button>
            </p>

        </Jumbotron>

    )
}

export function CarteBoutonArray({children, props}) {
    return (
        <>
            <h1> ESSai</h1>
            <CarteBouton texte={"Je suis une fantôme"}>
                Je suis le children
            </CarteBouton>
        </>



    )
}