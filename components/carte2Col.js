import React from "react";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";


/* **********************************************************
Création de 2 colonne Jumbotron, bootstrapés
********************************************************** */

export default function Carte2Col(props) {
    return (
        <Container id="core">
            <Row className="d-md-flex align-items-stretch align-items-md-end">
                <Col className="col-md-4 d-md-flex align-self-stretch align-items-md-end">
                    <Jumbotron className="d-flex flex-column flex-grow-1 justify-content-between justify-content-around align-self-stretch" id="valeurs">
                        {props.carteGauche}
                    </Jumbotron>
                </Col>
                <Col className="col-md-8 d-md-flex align-self-stretch align-items-md-end">
                    <Jumbotron className="d-flex flex-column flex-grow-1 justify-content-between align-content-around align-self-stretch" id="pourquoi">
                        {props.carteDroite}
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}
