import React from "react";
import styles from "./css/index-layout.module.css";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";

export default function Menu({data}) {
    // use react hooks for having mouse hover feature
    // mouse-hover howto :  https://stackoverflow.com/questions/43010814/how-can-i-make-react-bootstraps-dropdown-open-on-mouse-hover
    const [categorieHoverShow, toggleCategorieHoverShow] = React.useState(false); // show / not show
    const [categorieId, toggleCategorieId] = React.useState(false); // menu categorie id to show
    const [categorieClicked, toggleCategorieClicked] = React.useState(false); // show / not show

    const [pageHoverShow, togglePageHoverShow] = React.useState(false); // show / not show
    const [pageId, togglePageId] = React.useState(false); // menu categorie id to show
    const [pageClicked, togglePageClicked] = React.useState(false); // show / not show

    return (
        <Container className={styles.menu}>
            <Navbar variant={'light'} expand={'md'}>
                <div className="container-fluid">
                    <Navbar.Brand href={"/"}>Accueil</Navbar.Brand>
                    <Navbar.Toggle split id={"dropdown-split-basic"}/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto dropdown ">
                            {data && data.map((categorie, key) => {
                                return (
                                    <div key={key}>
                                        {categorie.pages.length > 0 ? (
                                            <Nav.Item
                                                className={"d-flex align-items-center" + " " + styles.navItem}
                                                role={"presentation"}>
                                                {categorie.faIcone && (<i className={categorie.faIcone}/>)}
                                                {/* NIV0 : CATEGORIES */}
                                                <NavDropdown key={key} id={key} title={categorie.nom}
                                                             onMouseEnter={() => {
                                                                 toggleCategorieHoverShow(true);
                                                                 toggleCategorieId(key);
                                                             }}
                                                             onMouseLeave={() => {
                                                                 toggleCategorieHoverShow(false);
                                                                 toggleCategorieId(-1);
                                                                 toggleCategorieClicked(false);
                                                                 togglePageClicked(false);
                                                             }}
                                                             onClick={() => {
                                                                 toggleCategorieClicked(true);
                                                                 toggleCategorieId(key);
                                                             }}
                                                             show={(categorieHoverShow && key === categorieId && window.innerWidth > 1000)
                                                             || (categorieClicked && key === categorieId)}
                                                >
                                                    {/* NIV1 : PAGE */}
                                                    {categorie.pages.map((page, key) => {
                                                        if (page.paragraphes.length > 0) {
                                                            return (
                                                                <NavDropdown key={key} id={key} title={page.titreMenu}
                                                                             className={"dropright " + styles.navItem}
                                                                             onMouseEnter={() => {
                                                                                 togglePageHoverShow(true);
                                                                                 togglePageId(key);
                                                                             }}
                                                                             onMouseLeave={() => {
                                                                                 togglePageHoverShow(false);
                                                                                 togglePageId(-1);
                                                                                 //togglePageClicked(false);
                                                                             }}
                                                                             onClick={() => {
                                                                                 togglePageClicked(true);
                                                                                 togglePageId(key);
                                                                             }}
                                                                             show={(pageHoverShow && key === pageId && window.innerWidth > 1000)
                                                                             || (pageClicked && (key === pageId))}

                                                                >
                                                                    {/* NIV2 : PARAGRAPHE */}
                                                                    {page.paragraphes.map((paragraphe, key) => {
                                                                        return (
                                                                            <Link key={key}
                                                                                  href={`/page/${encodeURIComponent(page.id)}#${encodeURIComponent(paragraphe.id)}`}
                                                                                  passHref>
                                                                                <NavDropdown.Item
                                                                                    as={"a"}>{paragraphe.titre}
                                                                                </NavDropdown.Item>
                                                                            </Link>
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
