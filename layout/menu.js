import React from "react";
import styles from "./css/index-layout.module.css";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";

export default function Menu({data}){
    return(
        <Container className={styles.menu}>
            <Navbar variant={'light'} expand={'md'}>
                <div className="container-fluid">
                    <Navbar.Brand href={"/"}>Accueil</Navbar.Brand>
                    <Navbar.Toggle split id={"dropdown-split-basic"}/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            {data && data.map((categorie, key) => {
                                return (
                                    <div key={key}>
                                        {categorie.pages.length > 1 ? (
                                            <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem}
                                                      role={"presentation"}>
                                                {categorie.faIcone && (<i className={categorie.faIcone}/>)}
                                                <NavDropdown id={key} title={categorie.nom}>
                                                    {categorie.pages.map((page, key) => {
                                                        if (page.paragraphes.length > 1) {
                                                            return (
                                                                <NavDropdown id={key} title={page.titreMenu}>
                                                                    {page.paragraphes.map((paragraphe, key) => {
                                                                        return (
                                                                            <Link key={key}
                                                                                  href={`/page/${encodeURIComponent(page.id)}#${encodeURIComponent(paragraphe.id)}`}
                                                                                  passHref><NavDropdown.Item
                                                                                as={"a"}>{paragraphe.titre}</NavDropdown.Item></Link>
                                                                        )
                                                                    })}
                                                                </NavDropdown>
                                                            )
                                                        } else {
                                                            return (
                                                                <Link key={key}
                                                                      href={`/page/${encodeURIComponent(page.id)}`}
                                                                      passHref><NavDropdown.Item
                                                                    as={"a"}>{page.titreMenu}</NavDropdown.Item></Link>
                                                            )
                                                        }
                                                    })}
                                                </NavDropdown>
                                            </Nav.Item>

                                        ) : (
                                            <Nav.Item className={"d-flex flex-row align-items-center " + styles.navItem}
                                                      role={"presentation"}>
                                                {categorie.faIcone && (<i className={categorie.faIcone}/>)}
                                                <Nav.Link as={Link} href="#">{categorie.nom}</Nav.Link>
                                            </Nav.Item>
                                        )}
                                    </div>

                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Container>
    )
}
