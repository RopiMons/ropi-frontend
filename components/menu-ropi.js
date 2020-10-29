import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import styles from './ropi_base.module.css'

export default function MenuRopi({children, props}) {
    return (

        <Container className={styles.menu}>
            <Navbar variant={'light'} expand={'md'}>
                <div className="container-fluid">
                    <Navbar.Brand href={"/"}>Ropi</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Item className={"text-left d-flex flex-row align-items-center " + styles.navItem}
                                      role={"presentation"} style={{padding: 0}}>
                                <i className={"far fa-question-circle "}/>
                                <Nav.Link href="#">A propos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem}
                                      role={"presentation"}>
                                <i className="fa fa-play"/>
                                <Nav.Link href="#">En pratique</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem}
                                      role={"presentation"}>
                                <i className="far fa-newspaper"/>
                                <Nav.Link href="#">Actualités</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem}
                                      role={"presentation"}>
                                <i className="far fa-address-book"/>
                                <Nav.Link href="#">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem}
                                      role={"presentation"}>
                                <i className="fas fa-sign-in-alt"/>
                                <Nav.Link href="#">Login</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Container>

    )
}