import React, {useMemo, useState} from "react";
import ApiCaller, {BASE} from "../components/services/ApiCaller";
import {Accordion, Button, Card, Col, Container, Image, Row, Table} from "react-bootstrap";
import FormikForm, {MySelect, MyTextInput} from "../components/form/FormikForm";
import * as Yup from 'yup';
import {useFormikContext} from "formik";
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';

function CustomToggle({children, eventKey, color, updateTab}) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        updateTab(eventKey)
    );

    return (
        <Button
            variant={color}
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}


export async function getStaticProps(context) {
    const [articles, depots] = await Promise.all([ApiCaller.getArticles(), ApiCaller.getPointsDepot()]);

    if (!articles && !articles.json && !articles.json['hydra:member'] && !depots && !depots.json && !depots.json['hydra:member']) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            articles: articles.json['hydra:member'],
            depots: depots.json['hydra:member']
        },
        revalidate: 15 * 60
    }

}

const TotalValue = ({articles}) => {
    const {values} = useFormikContext();

    let count = 0;
    for (const fieldName in values) {
        const article = articles.find(article => fieldName === 'article_' + article.id);
        if (article) {
            count += values[fieldName] * article.prix;
        }
    }

    return count;
}

export default function Commande(props) {

    const [selectedTab, setSelectedTab] = useState('0')

    const validationSchema = useMemo(() => {
        let returnJson = {
            email: Yup.string('Merci d\'entrer du texte').email('Ceci n\'est pas un email valide').required('Votre adresse email est requise'),
            nom_prenom: Yup.string('Merci d\'entrer du texte').min(5, 'Merci d\'entrer complètement vos noms et prénoms').required('Votre nom et votre prénom sont requis')
        };

        if (selectedTab === '0') {
            returnJson = {...returnJson, ...{point_depot: Yup.number('Sélectionnez un point de dépôt dans la liste').required('Sélectionnez un point de dépôt dans la liste').integer('Sélectionnez un point de dépôt dans la liste').positive('Sélectionnez un point de dépôt dans la liste')}}
        }

        if (selectedTab === '1') {
            returnJson = {...returnJson, ...{code_postal: Yup.number('Merci d\'entrer un nombre').min(1000, 'Merci d\'entrer un code postal valide').max(9992, 'Merci d\'entrer un code postal valide').integer('Merci d\'entrer un code postal valide').required('Merci d\'entrer un code postal')}}
        }

        props.articles.map((article) => returnJson = {
            ...returnJson, ...{
                ['article_' + article.id]: Yup.number('Le nombre de billet à commander doit-être un nombre').required('Merci d\'entrer une valeur, quitte à ce que celle-ci soit nulle').min(0, 'Le nombre de billet doit-être positif ou null').integer('Le nombre de billet doit être un entier')
            }
        })
        return Yup.object(returnJson);
    }, [selectedTab]);
    const initialValues = useMemo(() => {
        let returnJson = {
            email: '',
            nom_prenom: ''
        };

        if (selectedTab === '0') {
            returnJson = {...returnJson, ...{point_depot: ''}}
        }

        if (selectedTab === '1') {
            returnJson = {...returnJson, ...{code_postal: ''}}
        }

        props.articles.map((article) => returnJson = {
            ...returnJson, ...{
                ['article_' + article.id]: 0
            }
        })
        return returnJson;
    }, [selectedTab]);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Commande de Ropi en ligne</h1>
                    <p>Pour commander des ropis en ligne vous devez d'abord être inscrit comme membre de l'asbl (lien
                        vers le formulaire de demande d'adhésion). Si vous êtes déjà membre, vous pouvez commander des
                        Ropi en complétant le formulaire ci-dessous</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card
                        bg={"light"}
                        text={"dark"}
                    >
                        <Card.Header>Feuille de commande</Card.Header>
                        <Card.Body>
                            <FormikForm
                                validationSchema={validationSchema}
                                initialValues={initialValues}
                            >
                                <h3>Votre identité</h3>
                                <MyTextInput
                                    label={"Votre nom et prénom"}
                                    name={"nom_prenom"}
                                    type={'text'}
                                />
                                <MyTextInput
                                    label={"Votre adresse email"}
                                    name={"email"}
                                    type={"email"}
                                />
                                <h3>Votre commande</h3>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Apperçu Billet</th>
                                        <th>Quantité à commander</th>
                                        <th>Description</th>
                                        <th>Prix (€)</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {props.articles.map(article => (
                                        <tr key={article.id}>
                                            <td width={"40%"}>
                                                <Image src={BASE + article.image} thumbnail fluid/>
                                            </td>
                                            <td style={{verticalAlign: 'middle'}}>
                                                <MyTextInput type={'number'} label={''} name={"article_" + article.id}/>
                                            </td>
                                            <td style={{verticalAlign: 'middle'}}><p>{article.nom}</p></td>
                                            <td id="prix" style={{verticalAlign: 'middle'}}>{article.prix} €</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                                <p style={{textAlign: 'right', fontWeight: 'bold'}}>Sous-total : <TotalValue
                                    articles={props.articles}/>€</p>
                                <h3>La livraison</h3>
                                <Accordion defaultActiveKey={selectedTab}>
                                    <Card bg={"primary"}>
                                        <Card.Header>
                                            <CustomToggle eventKey={'0'} color={'primary'} updateTab={setSelectedTab}>
                                                Livraison dans un commerce partenaire (Gratuit)
                                            </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p>Vous pouvez recevoir votre commande dans un commerce participant</p>
                                                <MySelect
                                                    name={"point_depot"}
                                                    label={"Selectionner le point de dépot"}
                                                    placeholder={"Selection du point de dépot"}
                                                >
                                                    <option value={''}>Choisissez un point de dépôt de votre commande
                                                    </option>
                                                    {props.depots.map(commerce => (
                                                        <option
                                                            value={commerce.id}>{commerce.nom} ({commerce.adresses[0].rue}, {commerce.adresses[0].numero} à {commerce.adresses[0].ville.codePostal} {commerce.adresses[0].ville.ville})</option>
                                                    ))}
                                                </MySelect>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card bg={"info"}>
                                        <Card.Header>
                                            <CustomToggle eventKey={'1'} color={'info'} updateTab={setSelectedTab}>
                                                Livraison à domicile (Payant)
                                            </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p>La livraison à domicile n'est possible qu'en Belgique</p>
                                                <MyTextInput type={'number'} label={'Votre code postal belge'}
                                                             name={'code_postal'}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <h3>Mode de paiement</h3>
                                <p>Toutes nos commandes sont payable par virement bancaire</p>
                            </FormikForm>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}
