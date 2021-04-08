import React from "react";
import {Col, Container, Row, Jumbotron} from "react-bootstrap";
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

export async function getStaticProps() {
    let status = null, data = null;
    await ApiCaller.getCommerces().then(response => {
        status = response.status;
        if (status === 200) {
            data = response.json["hydra:member"];
        }
    });
    return {
        props: {
            status: status,
            commerces: data
        }
    }
}

const AddCommerce = () => {
    return (
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
const doFilter = (setCommerceFn, commerces, setFilters, filters, evt) => {

    //console.log("DEBUG : ", commerces)
    // Récupérer filtres à choix multiples et les conserver
    switch (evt.target.id) {
        case "codePostal":
            let codePostauxSelectiones = [];
            [...evt.target.selectedOptions].forEach(element => codePostauxSelectiones.push(element.value));
            filters.codesPostaux = codePostauxSelectiones;
            console.log("DEBUG: ", codePostauxSelectiones);
            break;
        case "typeActivite":
            let typeActiviteSelectionees = [];
            [...evt.target.selectedOptions].forEach(element => typeActiviteSelectionees.push(element.value));
            filters.typesActivites = typeActiviteSelectionees;
            break;
        case "isComptoir":
            filters.isComptoir = evt.target.checked;
            //console.log("COMPOIR values ?: ", evt.target.checked)
            break;
        case "description":
            filters.description = evt.target.value;
            console.log(filters.description)
            break;
    }

    //console.log("FILTERS: ", filters);

    setFilters(filters);  // update hook-state

    let filteredCommerces = [];

    // First filter on comptoir as it may eliminate a lot of commerces and makes the rest run faster.
    let preFilteredCommerces;
    if (filters.isComptoir) {
        preFilteredCommerces = commerces.filter(commerces => commerces.isComptoir)  // isComptoir vient de l'api  (TODO le "e" à la fin va etre supprimé dans prochaine version)
        console.log("DEBUG Comptoir", preFilteredCommerces)
    } else {
        preFilteredCommerces = commerces;
    }

    // Vérifie si chaque commerce est dans les conditions du filtre
    preFilteredCommerces.forEach(commerce => {

        // Filtrer sur les codes postaux (choix multiples)
        var addCommerceOnCodePostal = false;

        filters.codesPostaux.forEach(selectedCodePostal => {
            if (selectedCodePostal === "tous") {
                addCommerceOnCodePostal = true;
            } else if (selectedCodePostal === commerce.adresses[0].ville.codePostal) {
                addCommerceOnCodePostal = true;
            }
        })

        // Filtrer sur le type d'activité (choix multiples)
        var addCommerceOnActivite = false;
        filters.typesActivites.forEach(selectedActivite => {
            if (selectedActivite === "tous") {
                addCommerceOnActivite = true;
            } else if (selectedActivite === commerce.activite) {    // activite n'exite pas encore dans API
                addCommerceOnActivite = true;
            }
        })

        // filtrer sur la description libre
        // Le nom des field est inclu dans la recherche, donc il va enfait trouver 'trop',
        // donc pas idéal mais a le mérite d'être simple à coder ;-)
       
        var addCommerceDescription = false;
        var objects = JSON.stringify(commerce).toUpperCase();
        if (objects.indexOf(filters.description.toUpperCase()) !== -1) {
            addCommerceDescription = true;
        }

        // Combine filters
        if (addCommerceOnCodePostal && addCommerceOnActivite && addCommerceDescription) {
            filteredCommerces.push(commerce)
        }
    })

    setCommerceFn(filteredCommerces);

}

export default function Commercants({status, commerces}) {
    const narrowJumbo = {
        padding: 3,
        backgroundColor: "white",
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1
        //maxHeight: 100,
        //width: 'auto',
        //height: 100,
    };

    // Utilisation d'un hook-state : https://fr.reactjs.org/docs/hooks-state.html
    // Conserve la liste des commerçants filtrés et définition de la fonction pour mettre à jour.
    // Par défaut, la liste complète est affichée (dans le futur si bcp de commerçant,
    // il faudrait peut-être n'afficher que les plus récents)
    let [filteredCommerces, setCommerces] = React.useState(commerces);

    // conserve la liste des paramètres sélectionnés comme filtre, clic après clic.
    let [filters, setFilters] = React.useState({
        description: "",
        codesPostaux: ["tous"],
        isComptoir: false,     // if false, will show commerces including comptoir de change. If tru only show comptoirs de change
        typesActivites: ["tous"]
    })

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
           {/*  <div className="container py-xl-5" id="passez-action">
                <h2 className="text-center my-3">Les prestataires qui acceptent le Ropi</h2>
                <h4 className="text-center subtitle font-weight-normal">Commerçants, prestataires et associations </h4>
            </div> */}

            <Carte2Col 
                carteGauche={
                    <>
                        <h2>Les prestataires qui acceptent le Ropi</h2>                
                        <h4>Cliquez sur la carte (popups) et aidez-vous des filtres ci-dessous pour rechercher un commerce !</h4>
                       
                    </>
                }

                carteDroite={
                    <>
                        <Row className={"justify-content-between align-items-center d-md-flex"}>
                            <Col>
                                <div className="embed-responsive " style={mapDivStyle}>
                                    <Map commerces={filteredCommerces}/>
                                </div>
                            </Col>
                        </Row>
                        <br/><small><a href="https://www.openstreetmap.org/#map=12/50.4511/3.9111">Afficher une carte plus grande</a></small>

                    </>
                }
            />

            {/* **********************************
                *****     Bar des filtres  *******
            ***************************************/}
            <Jumbotron className=" " id="valeurs" style={narrowJumbo}>
                <Row className="d-flex justify-content-start">
                                                
                <Col className="col-sm-6 col-md-4 col-lg-3">
                   
                    <table>
                    <tr>
                    <label for="cp"> Codes postaux</label>
                    </tr>
                    <tr>
                    <select        
                        name="cp"                
                        multiple={"multiple"}
                        size={4}
                        id="codePostal"
                        onChange={(evt) => {doFilter(setCommerces, commerces, setFilters, filters, evt)}}>
                                <option value="tous" selected>Tous</option>
                                <option value="7020">7020 NIMY</option>
                                <option value="7000">7000 Mons</option>
                                <option value="7012">7012 Jemappes</option>
                                <option value="7021">7021 Havré</option>
                                <option value="7011">7011 Ghlin</option>
                                <option value="7022">7022 Hyon</option>
                                <option value="7034">7034 Mons</option>
                                <option value="7050">7050 Jurbise / Soignies</option>
                    </select>           
                    </tr>
                    </table>            
                  
                </Col>
            
                <Col className="col-sm-6 col-md-4 col-lg-3 ">
                   
                   <table>
                       <tr>
                    <label for="tc"> Types de commerce </label>
                    </tr>
                    <tr>
                            <select 
                            name ="tc"
                            multiple size="4" id="typeActivite"
                                    onChange={(evt) => doFilter(setCommerces, commerces, setFilters, filters, evt)}>
                                <option value="tous" selected>Tous</option>
                                <option value="1">Alimentation</option>
                                <option value="2">Habitat</option>
                                <option value="3">Santé et bien être</option>
                                <option value="4">Enseignement et culture</option>
                                <option value="5">Soin à la nature et à la terre</option>
                                <option value="6">Outils et technologies</option>
                                <option value="7">Finance et économie</option>
                                <option value="8">Foncier et gouvernance</option>
                            </select>
                            </tr>   
                        </table>
                </Col>     

                <Col className="col-sm-12 col-md-12 col-lg-3"> 
                <table>
                <tr>&nbsp;</tr>
                <tr>
                            
                            <label> Recherche libre </label>    
                            <input type="text" id="description" 
                                onChange={(evt) => doFilter(setCommerces, commerces, setFilters, filters, evt)}/>                    
                                
                            </tr>
                    <tr>&nbsp;</tr>
                    <tr>
                            
                            <label> Comptoirs de change ? &nbsp;</label>
                            <input type="checkbox" id="isComptoir"
                                       onChange={(evt) => doFilter(setCommerces, commerces, setFilters, filters, evt)}/>                                                
                                                               
                            </tr>      
                            </table>                                         
                    </Col> 
                        

                 </Row>
                 <Row >
                     <Col >
                        <h5>(Maintenez Ctrl appuyé pour choisir plusieurs options)</h5>
                  </Col>
                 </Row>
            </Jumbotron>

            {/******  Affiche la liste des commerces en ajouter avant et après la liste une carte spéciale pour ajouter un commerce  ********/}
            <Container className="row d-flex flex-row" id="actions">
                <AddCommerce/>
                <CarteBoutonListeCommerces commerces={filteredCommerces}/>
                <AddCommerce/>
            </Container>

        </>
    )
}
