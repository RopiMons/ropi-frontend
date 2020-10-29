import Head from "next/head";;
import React from "react";
import  {Row, Container, Col, Table, Navbar, Nav} from "react-bootstrap";
import styles from './ropi_base.module.css'

/* **********************************************************
    Le footer du Ropi, à afficher en bas de chaque page
********************************************************** */

export default function FooterRopi({children, props}){
    return(

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
                                <span className={"fa fa-map-marker " + styles.footerContactsIcon}/>

                                <p style={{width: '135px', fontSize: '14px'}}
                                   className={styles.footerContactsP}>
                                    <span className={styles.spanNewLineSpan}>24 rue de Ghlin</span>
                                    <span className={styles.spanNewLineSpan}>7012 Mons, Belgique</span>
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
                            <p style={{fontSize: '16px'}} className={styles.footerAboutP}> Le Ropi est la monnaie citoyenne montoise!</p>
                            <div className={"social-icons " + styles.divSocialLinks}>
                                <a href="https://www.facebook.com/RopiAsbl/" className={styles.socialLinksA}><i className="fab fa-facebook-f" /></a>
                                <a href="https://github.com/RopiMons" className={styles.socialLinksA}><i className="fab fa-github" /></a>
                            </div>
                        </Col>
                    </Row>
                </footer>

    )
}


