import React from "react";
import  {Row, Container, Col, Table} from "react-bootstrap";
import styles from './css/index-layout.module.css'

/* **********************************************************
    Le banner du Ropi, à afficher en haut de chaque page
********************************************************** */

export default function BannerRopi(props){
    return(
        <Container className={styles.banner}>
            <Row className={"justify-content-between align-items-center "+styles.bannerRow}>
                <Col md={3} xs={6} className={"align-self-start " + styles.logo}>
                    <Row className="d-md-flex">
                        <Col>
                            <img className="img-fluid d-md-flex" src="/images/ropi_logo.png" style={{
                                width: '134px',
                                height: '46px',
                                padding: '0px'
                            }} />
                        </Col>
                    </Row>
                </Col>
                <Col className={"d-none d-md-inline " + styles.citationCounters}>
                    <Row className={"flex-grow-0 flex-shrink-0 " + styles.counters} >
                        <Col>
                            <Table size={"sm"} className={styles.tableDark} >
                                <thead className={"text-center "+styles.counterHeader}>
                                <tr>
                                    <th>Prestataires</th>
                                </tr>
                                </thead>
                                <tbody className={styles.counterBody}>
                                <tr>
                                    <td>21</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Table size={"sm"} className={styles.tableDark} >
                                <thead className={"text-center "+styles.counterHeader}>
                                <tr>
                                    <th>Comptoirs de change</th>
                                </tr>
                                </thead>
                                <tbody className={styles.counterBody}>
                                <tr>
                                    <td>2</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Table size={"sm"} className={styles.tableDark} >
                                <thead className={"text-center " + styles.counterHeader}>
                                <tr>
                                    <th>Ropi en circulation</th>
                                </tr>
                                </thead>
                                <tbody className={styles.counterBody}>
                                <tr>
                                    <td>4567</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Table size={"sm"} className={styles.tableDark} >
                                <thead className={"text-center " + styles.counterHeader}>
                                <tr>
                                    <th>Année de mise en circulation</th>
                                </tr>
                                </thead>
                                <tbody className={styles.counterBody}>
                                <tr>
                                    <td>2009</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6} md={3} className={styles.eventail}>
                    <img className="img-fluid" src="/images/eventail_billets3_rounded.png" />
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: 'justify', width: '500px'}}>
                    <h1 className={styles.subtitle +" font-weight-normal"} style={{fontSize: '23px', textAlign: 'right'}}>La monnaie citoyenne montoise</h1>
                </Col>
            </Row>
        </Container>
    )
}


