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
                                padding: '0px'                                
                            }} />
                            
                      
                            <img className="img-fluid" src="/images/eventail_billets3_rounded.png" />
                
                              
                        </Col>
                    </Row>
                </Col>
                <Col className={"d-none d-md-inline " + styles.citationCounters}>
                    <Row className={"flex-grow-0 flex-shrink-0 " + styles.counters} >
                        <Col>
                            <Table size={"lg"} className={styles.tableDark} >
                                <thead className={"text-center "+styles.counterHeader}>
                                <tr>
                                    <th>Nos prestataires</th>
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
                            <Table size={"lg"} className={styles.tableDark} >
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
                            <Table size={"lg"} className={styles.tableDark} >
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
                        
                    </Row>
                </Col>
               
            </Row>
            <Row>
                <Col style={{textAlign: 'justify', width: '500px'}}>
                    <h1 className={styles.subtitle +" font-weight-normal"} style={{fontSize: '23px', textAlign: 'left'}}>
                        La monnaie citoyenne montoise
                        </h1>
                </Col>
            </Row>
        </Container>
    )
}


