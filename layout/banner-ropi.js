import React from "react";
import  {Row, Container, Col, Table} from "react-bootstrap";
import styles from './css/index-layout.module.css'

/* **********************************************************
    Le banner du Ropi, à afficher en haut de chaque page
********************************************************** */


export default function BannerRopi(props){
    
    const banner = {
        marginTop: 10,        
        backgroundImage: 'url("/images/banner02.png")'
      }          
    const TableCounter = {
        padding: 0, 
        margin: 5, 
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 20,
        fontSize: 20,
        fontFamily: 'Monospace',
        color: '{#5a5757}',
        textAlign: 'center'
    }    
            
    const logo = {
        paddingTop: 20,
        maxWidth: 150
      }

    const subtitle = {
        color: 'white',   
        mixBlendMode: 'difference',
        textAlign: 'right',     
      }

    return(
        <Container  style={banner}>
            <Row className={"justify-content-between align-items-center "}>
                 {/* ************ Le logo ROPI ************ */}
                <Col className={"col-lg-3 d-md-inline "} className={"align-self-start "}  style={logo}>*                   
                     <img className="img-fluid d-md-flex" src="/images/ropi_logo.png" 
                     styles={{padding: '0px'}} />                                                                      
                </Col>
                {/* ************ Les compteurs ************ */} 
                {/* <Col className={"col-lg-3  d-md-none d-md-inline "}  style={Counters}> */}
                    {/* <Row className={"flex-grow-0 flex-shrink-0 "}  > */}
                        <Col className={"col-lg-3"} >                    
                            <Table size={"lg"} style={TableCounter} >
                                <thead> <tr> <th>Nos prestataires</th> </tr>  </thead>
                                <tbody> <tr> <td>21</td>  </tr> </tbody>
                            </Table>
                        </Col>
                        <Col className={"col-lg-3"}>
                            <Table size={"lg"} style={TableCounter} >
                                <thead className={"text-center "}> <tr><th>Comptoirs de change</th> </tr>  </thead>
                                <tbody > <tr> <td>2</td> </tr> </tbody>
                            </Table>
                        </Col>
                        <Col className={"col-lg-3"}>
                            <Table size={"lg"} style={TableCounter} >
                                <thead> <tr> <th>Ropi en circulation</th></tr> </thead>
                                <tbody > <tr> <td>4567</td> </tr> </tbody>
                            </Table>
                        </Col>
                        
                    {/* </Row> */}
                {/* </Col> */}
                
            </Row>

            {/* Le bas du banner */}
            <Row>
                <Col className={"align-self-end"} style={subtitle}>
                    <h4 className={"font-weight-normal"} >
                        La monnaie citoyenne montoise </h4> 
                </Col>
                    {/* ************ Les billets Ropi en éventail ************ */}
                <Col md={3} xs={6} className={"align-self-start "}  style={logo}>
                    <Row className="d-md-flex">
                        <Col>                                             
                            <img className="img-fluid" src="/images/eventail_billets3_rounded.png" />                                          
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


