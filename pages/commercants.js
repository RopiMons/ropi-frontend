import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Carte2Col from "../components/carte2Col";
import Carte4Col, {CarteBoutonListeCommerces} from "../components/carte4Col";
import ApiCaller from "../components/services/ApiCaller";
import Error from "next/error";
import dynamic from "next/dynamic";

const mapDivStyle={
    height: "100 px",
    background: "#56854c",
    margin: "10px",
    color: "white"
};
const myMapColStyle = {};

export async function getStaticProps() {
    let status = null, data = null;
    await ApiCaller.getCommerces().then(response => {
        status = response.status;
        if (status === 200 && response.json && response.json['hydra:member']) {
            data = response.json['hydra:member'];
        }
    });
    return {
        props: {
            status: status,
            commerces: data
        },
        revalidate: 3600
    }
}

const AddCommerce = () => {
    return (
        <Carte4Col
            texte="Ajouter mon commerce"
            icone='plus'
            logo=''
            boutonTextColor={'#ffffff'}
            boutonBackgroundColor={'#7f7cff'}
            boutonBackgroundImage=''
            boutonText1={'Ajouter mon commerce'}
            boutonLienWWW1={"internal_link_ajouter_commerce"}
        />
    )
}

export default function Commercants({status, commerces}) {
    if (status !== 200) {
        return <Error statusCode={status}/>;
    }

    const Map = React.useMemo(() => dynamic(
        () => import('../components/map/commercant-map'), // replace '@components/map' with your component's location
        {
            loading: () => <p>A map is loading</p>,
            ssr: false // This line is important. It's what prevents server-side render
        }), []);

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
                                    <Map commerces={commerces}/>
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
