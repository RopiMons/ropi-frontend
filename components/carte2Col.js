import Head from "next/head";

import React from "react";
import {Row, Container, Col, Table, Navbar, Nav, Jumbotron, Button} from "react-bootstrap";


/* **********************************************************
Création de 2 colonne Jumbotron, bootstrapés
********************************************************** */

export default function Carte2Col(props) {




    return (

        <div className="container" id="core">
            <div className="row d-md-flex align-items-stretch align-items-md-end">

                <div className="col-md-4 d-md-flex align-self-stretch align-items-md-end">
                    <div className="jumbotron d-flex flex-column flex-grow-1
                    justify-content-between justify-content-around align-self-stretch" id="valeurs">

                        {props.carteGauche}

                    </div>
                </div>

                <div className="col-md-8 d-md-flex align-self-stretch align-items-md-end">
                    <div className="jumbotron d-flex flex-column flex-grow-1
                    justify-content-between align-content-around align-self-stretch"
                         id="pourquoi">

                        {props.carteDroite}

                    </div>
                </div>

            </div>
        </div>
    )

}