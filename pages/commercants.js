import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import Carte2Col from "../components/carte2Col";
import Carte4Col, {CarteBoutonListeCommerces} from "../components/carte4Col";
import dynamic from "next/dynamic";
import ApiCaller from "../components/services/ApiCaller";
import Error from "next/error";

const MapWithNoSSR = dynamic(() => import('./../components/openStreetMap'),{ssr:false});

const mapDivStyle={
    height: "100 px",
    background: "#56854c",
    margin: "10px",
    color: "white"
};
const myMapColStyle = {};

export async function getStaticProps(context) {
    let status, data = null;
    await ApiCaller.getCommerces().then(response => {
        status = response.status;
        if(status === 200){
            data = response.json;
        }
    });
    return {
        props: {
            status : status,
            commerces: data
        }
    }
}
const AddCommerce = ()=>{
    return(
        <Carte4Col texte="Ajouter mon commerce"
                   icone='plus'
                   logo=''
                   boutonTextColor={'#ffffff'}
                   boutonBackgroundColor={'#7f7cff'}
                   boutonBackgroundImage=''
                   boutonText1={'Ajouter mon commerce'}
                   boutonLienWWW1={"internal_link_ajouter_commerce"}>
        </Carte4Col>
    )
}

export default function Commercants({status, commerces}) {
    if(status!==200){
        return <Error statusCode={status} />;
    }

    return (
        <>
            <div className="container py-xl-5" id="passez-action">
                <h2 className="text-center my-3">Les prestataires qui acceptent le Ropi</h2>
                <h4 className="text-center subtitle font-weight-normal">Commerçants, prestataires et associations </h4>
            </div>

            <Carte2Col
                carteGauche={
                    <form>
                        <h5>Filtrez les prestataires selon différents critères</h5>
                        <br />
                        <label>
                            Nom et description (texte libre):
                            <input type="text" name="freeText"/>
                        </label>
                        <label>
                            Code postal :
                            <input type="text" name="postalCode"/>
                        </label>
                        <label>
                            Types de commerce :
                            <input type="text" name="prestataireType"/>
                        </label>
                        <br />
                        <input type="submit" value="Filtrer"/>
                    </form>
                }

                carteDroite={
                    <>
                        <Row className={"justify-content-between align-items-center d-md-flex"}>
                            <Col style={myMapColStyle}>
                                <div className="embed-responsive " style ={mapDivStyle}>
                                    <MapWithNoSSR/>
                                </div>
                            </Col>
                        </Row>
                        <br/><small><a href="https://www.openstreetmap.org/#map=12/50.4511/3.9111">Afficher une carte plus grande</a></small>

                    </>
                }
            />

            <Container className="row d-flex flex-row" id="actions">
                <AddCommerce />
                <CarteBoutonListeCommerces commerces={commerces}  />
                <AddCommerce />
            </Container>
        </>
    )


}