import React from "react";
import styles from "./css/index-layout.module.css";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";

export default function Menu({data}){
    return(
        <Container className={styles.menu}>
            <Navbar variant={'light'} expand={'md'}>
                <div className="container-fluid">
                    <Navbar.Brand href={"/"}>Ropi</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            {data && data.map((categorie,key)=>{
                                return(
                                    <>
                                        { categorie.pages.length > 1 ? (
                                            <Nav.Item key={key} className={"d-flex flex-row align-items-center " + styles.navItem} role={"presentation"}>
                                                {categorie.fa_icone && (<i className={categorie.fa_icone} />)}
                                                <NavDropdown id={key} title={categorie.nom}>
                                                    {categorie.pages.map((page,key) => {
                                                        return(
                                                            <Link key={key} href={`/page/${encodeURIComponent(page.slug)}`} passHref><NavDropdown.Item as={"a"}>{page.titre_menu}</NavDropdown.Item></Link>
                                                        )
                                                    })}
                                                </NavDropdown>
                                            </Nav.Item>

                                        ):(
                                            <Nav.Item key={key} className={"d-flex flex-row align-items-center " + styles.navItem} role={"presentation"}>
                                                {categorie.fa_icone && (<i className={categorie.fa_icone} />)}
                                                <Nav.Link as={Link} href="#">{categorie.nom}</Nav.Link>
                                            </Nav.Item>
                                        )}
                                    </>

                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Container>
    )
}
