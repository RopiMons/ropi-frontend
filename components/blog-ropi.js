import Head from "next/head";

import React from "react";
import {Row, Container, Col, Table, Navbar, Nav, Jumbotron, Button} from "react-bootstrap";//import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBIcon} from "mdbreact";

import styles from './ropi_base.module.css'

/* **********************************************************
Création d'un blog de nouvelles, avec
    - une nouvelle principale
    - des nouvelles secondaires
    - plus de nouvelles ...
********************************************************** */

export function BlogRopiPieceOfNewsMain(props) {
    return (

        <div className="col-lg-6">
            <div className="card border-0 mb-4"><a href={props.lien}>
                <img className="card-img-top"
                     src={props.image}
                     alt={props.imageAlt}/></a>
                <div className="date-pos text-center p-3 bg-name-date">{props.auteur} {props.date}</div>
                <h5 className="font-weight-medium mt-3"><a href={props.lien}
                                                           className="link text-decoration-none">{props.titre}</a></h5>
                <p className="m-t-20"> {props.chapeau}  </p>
            </div>
        </div>
    )
}

export function BlogRopiPieceOfNewsSecondaries(props) {
    return (

        <div className="col-md-6">
            <div className="card border-0 mb-4">

                <a href={props.lien}><img className="card-img-top"
                                 src={props.image}
                                 alt={props.imageAlt}/></a>
                <div className="date-pos text-center p-3 bg-name-date"> {props.auteur} {props.date}
                </div>
                <h6 className="font-weight-medium mt-3">
                    <a href={props.lien}
                       className="link text-decoration-none">{props.titre}
                    </a>
                </h6>
            </div>
        </div>
    )
}

export default function BlogRopi(props) {
    return (

        <div className="col-md-12">
            <div className="blog-home3 py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h3 className="my-3">Des nouvelles du Ropi et des prestataires</h3>
                            <h6 className="subtitle font-weight-normal">Les actualités de l&#39;asbl Ropi et de ses
                                prestataires partenaires</h6>
                        </div>
                    </div>

                    <div className="row mt-4">

                        <BlogRopiPieceOfNewsMain
                            image={"https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg"}
                            imageAlt={"Mon Image"}
                            auteur={"JOHN DOE"}
                            date={"SEPT 15, 2017"}
                            titre={"Ceci est mon titre"}
                            chapeau={"You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                            lien={"https://example.com"}>
                        </BlogRopiPieceOfNewsMain>

                        <div className="col-lg-6">

                            <div className="row">

                                <BlogRopiPieceOfNewsSecondaries
                                    image={"https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg"}
                                    imageAlt={"Mon Image"}
                                    auteur={"JOHN DOE"}
                                    date={"SEPT 15, 2017"}
                                    titre={"Ceci est mon titre"}
                                    lien={"https://example.com"}>
                                </BlogRopiPieceOfNewsSecondaries>

                                <BlogRopiPieceOfNewsSecondaries
                                    image={"https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg"}
                                    imageAlt={"Mon Image"}
                                    auteur={"JOHN DOE"}
                                    date={"SEPT 15, 2017"}
                                    titre={"Ceci est mon titre"}
                                    lien={"https://example.com"}>
                                </BlogRopiPieceOfNewsSecondaries>

                                <BlogRopiPieceOfNewsSecondaries
                                    image={"https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg"}
                                    imageAlt={"Mon Image"}
                                    auteur={"JOHN DOE"}
                                    date={"SEPT 15, 2017"}
                                    titre={"Ceci est mon titre"}
                                    lien={"https://example.com"}>
                                </BlogRopiPieceOfNewsSecondaries>


                                {/*MORE NEWS*/}
                                <div className="col-md-6">
                                    <div className="card text-center border-0 mb-4">
                                        <a href="#"

                                           className="link text-decoration-none">
                                            <MDBIcon className={"text-center fa-newspaper"} size="8x"/>
                                            {/*<i className="far fa-newspaper card-img-top more-news"></i>*/}
                                        </a>
                                        <h6 className="font-weight-medium mt-3 text-center">
                                            <a href="pages/index.js"
                                               className="link text-decoration-none">
                                                Afficher plus de nouvelles...</a></h6>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}