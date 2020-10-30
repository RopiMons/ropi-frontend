import Head from "next/head";

import React from "react";
import {Row, Container, Col, Table, Navbar, Nav, Jumbotron, Button} from "react-bootstrap";


/* **********************************************************
Création de 2 colonne Jumbotron, bootstrapés
********************************************************** */

export default function Carte2Col({children, props}) {


    const texte = ["Nos valeurs pour une transition écologique et sociale ",
        "Pourquoi une monnaie complémentaire à Mons ? Comment ça marche ?"];
    /* 1ère image : colonne de gauche
    2ème et 3ème image (vidéo) : colonne de droite     */
    const imageIncluse = ["images/valeurs_alpha.png",
        "images/illu_ropi.png", "https://www.youtube.com/embed/7-s_wIoMC9I"];


    return (

        <div className="container" id="core">
            <div className="row d-md-flex align-items-stretch align-items-md-end">

                <div className="col-md-4 d-md-flex align-self-stretch align-items-md-end">
                    <div className="jumbotron d-flex flex-column flex-grow-1
                    justify-content-between justify-content-around align-self-stretch" id="valeurs">
                        <h5> {texte[0]} <br/><br/></h5>

                        <img className="img-fluid" id="valeurs" src={imageIncluse[0]}/>

                        <p></p>
                        <p className="align-self-center">
                            <a className="btn btn-primary" role="button">En savoir plus</a>
                        </p>
                    </div>
                </div>

                <div className="col-md-8 d-md-flex align-self-stretch align-items-md-end">
                    <div className="jumbotron d-flex flex-column flex-grow-1
                    justify-content-between align-content-around align-self-stretch"
                         id="pourquoi">
                        <h5>{texte[1]}</h5>


                        <div className="row">
                            <div className="col-lg-5">
                                <img className="img-fluid" id="carte-interactive"
                                     src={imageIncluse[1]}/>
                            </div>
                            <div className="col text-center d-none d-lg-inline align-self-center">
                                <iframe allowFullScreen frameBorder="0"
                                        src={imageIncluse[2]}
                                        className="justify-content-start" id="video-mc"></iframe>
                            </div>
                        </div>

                        <p></p>

                        <p className="align-self-center">
                            <a className="btn btn-primary flex-column" role="button">En savoir plus</a>
                        </p>



                    </div>
                </div>

            </div>
        </div>
    )

}