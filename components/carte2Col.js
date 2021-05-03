import React from "react";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";


/* **********************************************************
Création de 2 colonne Jumbotron, bootstrapés
********************************************************** */

export default function Carte2Col(props) {

    

    const narrow = {
        backgroundColor: 'rgba(2555,255,255,0.7)',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        //paddingTop: 0,
        //paddingBottom: 0,
        color: "black",
        //textAlign: 'center',
        //maxHeight: 100,
        //width: 'auto',
        //height: 100,        
    };

    const empty = {
        backgroundColor: 'rgba(2555,255,255,0.0)',
        borderRadius: 20,
        marginTop: 0,
        marginBottom: 0,
        color: "black",
        padding: 0
    };


    return (
        <Container id="core" style={narrow}>
            <Row className="d-flex">
                <Col className="col-12 col-md-12 col-lg-4">
                    <Jumbotron className="" id="valeurs" style={empty}>
                        {props.carteGauche}
                    </Jumbotron>
                </Col>
                <Col className="col-md-12 col-lg-8" >
                    <Jumbotron id="pourquoi" style={empty}>
                        {props.carteDroite}
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}
