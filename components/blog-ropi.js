import React from "react";
import {MDBIcon} from "mdbreact";
import FacebookLatestNews from "./loadFacebookSDKjs"
import {Button, Col, Container, Row} from "react-bootstrap";

import styles from '../layout/css/index-layout.module.css'

/* **********************************************************
Création d'un blog de nouvelles, avec
    - une nouvelle principale
    - des nouvelles secondaires
    - plus de nouvelles ...
********************************************************** */

export function BlogRopiPieceOfNewsMain(props) {
    return (

        <Col className="col-12">            
                <a href={props.lien}>
                <img className="card-img-top"
                     src={props.image}
                     alt={props.imageAlt}/></a>
                <div className="date-pos text-center p-3 bg-name-date">{props.auteur} {props.date}
                    <h5 className="font-weight-medium mt-3"><a href={props.lien}
                                                           className="link text-decoration-none">{props.titre}</a></h5>
                    <p className="m-t-20"> {props.chapeau}  </p>        
                </div>                

        </Col>
    )
}

export function BlogRopiPieceOfNewsSecondaries(props) {
    return (

        <Col className="col-12 col-md-6 mt-4">            
                <a href={props.lien}>
                    <img className="card-img-top"
                                 src={props.image}
                                 alt={props.imageAlt}/></a>
                <div className="date-pos text-center bg-name-date"> 
                
                {props.auteur} {props.date}
                
                <h6 className="font-weight-medium text-center">
                    <a href={props.lien}
                       className="link text-decoration-none">{props.titre}
                    </a>
                </h6>            
                </div>
        </Col>
    )
}

export default function BlogRopi(props) {
    return (
        <Container className="py-xl-5" id="blog-actualite" fluid="true">
                

            <h2  className="text-center my-3">Des nouvelles du Ropi et des prestataires</h2>
                    
                {/* La dernière news de la page facebook */}
            <Row className="py-5 justify-content-center">               
                    <Col className="col-md-12 text-center">                            
                        <h4 className="subtitle font-weight-normal">Le dernier post de notre page facebook</h4>
                    </Col>
            </Row>

            <Row className="py-5 justify-content-center">
                <Col className="col-12 text-center d-flex justify-content-center" md={{ span: true}}>
                        <FacebookLatestNews messageId={props.messageId} />
                </Col>
            </Row>


            <Row className="py-5 justify-content-center">               
                    <Col className="col-md-12 text-center">                            
                        <h4 className="subtitle font-weight-normal">Les nouvelles de l'asbl</h4>
                    </Col>
            </Row>

            <Row className="py-5 justify-content-center">
                        <BlogRopiPieceOfNewsMain
                            image={"https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg"}
                            imageAlt={"Mon Image"}
                            auteur={"JOHN DOE"}
                            date={"SEPT 15, 2017"}
                            titre={"Ceci est mon titre"}
                            chapeau={"You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                            lien={"https://example.com"}
                        />
            </Row>

            <Row className="justify-content-center align-items-center">                   
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
                                <Col className="col-12 col-md-6 text-center">  
                                
                                    <a href="#"
                                           className="link text-decoration-none">
                                            <MDBIcon className={"text-center fa-newspaper"} size="8x"/>
                                            {/*<i className="far fa-newspaper card-img-top more-news"></i>*/}
                                    </a>
                                        <h6 className="font-weight-medium mt-3 text-center">
                                            <a href="pages/index.js"
                                               className="link text-decoration-none">
                                                Afficher plus de nouvelles...</a>
                                        </h6>          
                                        
                                
                                 </Col>                                                                     
            </Row>
        </Container>
    )

}
