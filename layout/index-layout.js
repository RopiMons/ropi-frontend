import Head from "next/head";;
import React from "react";
import  {Row, Container, Col, Table, Navbar, Nav} from "react-bootstrap";
import styles from './css/index-layout.module.css';

export default function IndexLayout({children, props}){
    return(
        <>
            <Head>
                <title>Le Ropi à Mons</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            </Head>
            <body>
            <Container>
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
                <Container className={styles.menu}>
                    <Navbar variant={'light'} expand={'md'}>
                        <div className="container-fluid">
                            <Navbar.Brand href={"/"}>Ropi</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse>
                                <Nav className="mr-auto">
                                    <Nav.Item className={"text-left d-flex flex-row align-items-center " + styles.navItem} role={"presentation"} style={{padding: 0}}>
                                        <i className={"far fa-question-circle "} />
                                        <Nav.Link href="#">A propos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem} role={"presentation"}>
                                        <i className="fa fa-play" />
                                        <Nav.Link href="#">En pratique</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem}  role={"presentation"}>
                                        <i className="far fa-newspaper" />
                                        <Nav.Link href="#">Actualités</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Nav className="ml-auto">
                                    <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem} role={"presentation"}>
                                        <i className="far fa-address-book" />
                                        <Nav.Link href="#">Contact</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem} role={"presentation"}>
                                        <i className="fas fa-sign-in-alt" />
                                        <Nav.Link href="#">Login</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </Container>
                    {children}
                <footer>
                    <Row className={styles.footer}>
                        <Col sm={6} md={4}>
                            <h3 className={styles.footerNavigationH3}>
                                <a href="#" className={styles.footerNavigationH3A}>Ropi<span className={styles.footerNavigationH3Span}>asbl</span></a>
                            </h3>
                            <p>
                                <a href="#" className={styles.footerNavigationPLinksA} >Accueil</a>
                                <strong> · </strong>
                                <a href="#" className={styles.footerNavigationPLinksA}>Documents</a>
                                <strong> · </strong>
                                <a href="#" className={styles.footerNavigationPLinksA}>Contact</a>
                            </p>
                            <p className={styles.footerNavigationPCompanyName}>Ropi asbl © 2009</p>
                        </Col>
                        <Col sm={6} md={4}>
                            <div>
                                <span className={"fa fa-map-marker " + styles.footerContactsIcon} />
                                <p style={{width: '135px', fontSize: '14px'}} className={styles.footerContactsP}>
                                    <span className={styles.spanNewLineSpan}>24 rue de Ghlin</span>
                                    7012 Mons, Belgique
                                </p>
                            </div>
                            <div>
                                <i className={"fa fa-phone " + styles.footerContactsIcon} />
                                <p className={"text-left " + styles.footerContactsP} style={{width: '144px',fontSize: '14px'}} >+32 (0)65 / 680.214</p>
                            </div>
                            <div>
                                <i className={"fa fa-envelope " + styles.footerContactsIcon} />
                                <p className={styles.footerContactsP}><a href="mailto:info@ropi.be" target="_blank" style={{fonSize: '14px'}} className={styles.footerContactsPA + " email"} >info@ropi.be</a></p>
                            </div>
                        </Col>
                        <div className="clearfix" />
                        <Col md={4}>
                            <h4 className={styles.footerAboutH4}>Au sujet du Ropi</h4>
                            <p style={{fontSize: '16px'}} className={styles.footerAboutP}> Le Ropi est la monnaie citoyenne montoise !</p>
                            <div className={"social-icons " + styles.divSocialLinks}>
                                <a href="https://www.facebook.com/RopiAsbl/" className={styles.socialLinksA}><i className="fab fa-facebook-f" /></a>
                                <a href="https://github.com/RopiMons" className={styles.socialLinksA}><i className="fab fa-github" /></a>
                            </div>
                        </Col>
                    </Row>
                </footer>
            </Container>
            </body>
        </>
    )
}
