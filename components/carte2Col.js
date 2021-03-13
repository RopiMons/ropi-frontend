import React from "react";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";


/* **********************************************************
Création de 2 colonne Jumbotron, bootstrapés
********************************************************** */

export default function Carte2Col(props) {

    const narrow = {
        margin: 20,
        paddingTop: 0,
        paddingBottom: 0,
        color: "black",
        backgroundColor: "white"
        //maxHeight: 100,
        //width: 'auto',
        //height: 100,        
    };

    const fond = {
        backgroundColor: "white"
    };

    return (
        <Container id="core">
            <Row className="d-md-flex align-items-stretch align-items-md-end">
                <Col className="col-12 col-md-12 col-lg-4 d-md-flex align-self-stretch align-items-md-end">
                    <Jumbotron className="d-flex flex-column flex-grow-1 justify-content-between 
                    justify-content-around align-self-stretch" id="valeurs" style={narrow}>
                        {props.carteGauche}
                    </Jumbotron>
                </Col>
                <Col className="col-md-12 col-lg-8 d-md-flex align-self-stretch align-items-md-end" >
                    <Jumbotron className="d-flex flex-column flex-grow-1 justify-content-between 
                    align-content-around align-self-stretch" id="pourquoi" style={narrow}>
                        {props.carteDroite}
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}
