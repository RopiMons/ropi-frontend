import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Carte2Col from "../components/carte2Col";
import Carte4Col, {CarteBoutonListeCommerces} from "../components/carte4Col";
import ApiCaller from "../components/services/ApiCaller";
import Error from "next/error";
import dynamic from "next/dynamic";
import { element } from "prop-types";



const MapWithNoSSR = dynamic(() => import('./../components/openStreetMap'),{ssr:false});

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

    if(status!==200){
        return <Error statusCode={status} />;
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
                        <h4>Filtrez les prestataires selon différents critères</h4>
                        <br />
                        <label>
                            <h5>Nom et description</h5>
                            <input type="text" name="freeText"/>
                        </label>
                        <label>
                            <h5>Comptoir de change &nbsp;
                                <input
                                    type="checkbox"
                                    id="comptoirChange"
                                    name="comptoirChange"
                                    onChange={(evt) => doFilter(setCommerces, commerces, evt)}/>
                            </h5>
                        </label>
                        <label>
                            <h5>Code postal</h5>
                            <select multiple={"multiple"} size="4" id="codePostal"
                                    onChange={(evt) => doFilter(setCommerces, commerces, setFilters, filters, evt)}>

                                <option value="tous">Tous</option>
                                <option value="7020">7020 NIMY</option>
                                <option value="7000">7000 Mons</option>
                                <option value="7012">7012 Jemappes</option>
                                <option value="7021">7021 Havré</option>
                                <option value="7011">7011 Ghlin</option>
                                <option value="7022">7022 Hyon</option>
                                <option value="7034">7034 Mons</option>
                                <option value="7050">7050 Jurbise / Soignies</option>
                            </select>


                        </label>
                        <label>
                            <h5>Types de commerce</h5>
                            <select multiple size="4" id="typeCommerce"
                                    onChange={(evt) => doFilter(setCommerces, commerces, evt)}>
                                <option value="">Tous</option>
                                <option value="1">Alimentation</option>
                                <option value="2">Habitat</option>
                                <option value="3">Santé et bien être</option>
                                <option value="4">Enseignement et culture</option>
                                <option value="5">Soin à la nature et à la terre</option>
                                <option value="6">Outils et technologies</option>
                                <option value="7">Finance et économie</option>
                                <option value="8">Foncier et gouvernance</option>
                            </select>
                        </label>
                        <br />
                        <input type="submit" value="Filtrer"/>
                    </form>
                }

                carteDroite={
                    <>
                        <Row className={"justify-content-between align-items-center d-md-flex"}>
                            <Col style={myMapColStyle}>
                                <div className="embed-responsive " style={mapDivStyle}>
                                    <Map commerces={commerces}/>
                                </div>
                            </Col>
                        </Row>
                        <br/><small><a href="https://www.openstreetmap.org/#map=12/50.4511/3.9111">Afficher une carte plus grande</a></small>

                    </>
                }
            />

            {/******  Affiche la liste des commerces  ********/}
            <Container className="row d-flex flex-row" id="actions">
                <AddCommerce />
                <CarteBoutonListeCommerces commerces={Filteredcommerces}  />
                <AddCommerce />
            </Container>

        </>
    )


}
