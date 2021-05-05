import React from "react";
import  {Row, Container, Col, Table} from "react-bootstrap";
import styles from './css/index-layout.module.css'

/* **********************************************************
    Le banner du Ropi, à afficher en haut de chaque page
********************************************************** */


export default function BannerRopi(props){
    
    const banner = {
        marginTop: 0,        
        paddingTop: 0,
        //backgroundImage: 'linear-gradient(rgba(176, 214, 185, 0.5), rgba(255, 255, 0, 0.5)), url("/images/banner02.png")',
        //backgroundImage: 'rgba(255, 255, 255, 1.0), url("/images/banner02.png")',
        backgroundImage: 'url("/images/banner02.png")',
        //mixBlendMode: 'luminosity',
        mixBlendMode: 'normal',
        //borderStyle: 'inset'
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }          
    const TableCounter = {
        padding: 0, 
        margin: 0, 
        //backgroundColor: 'rgba(255,255,255,0.4)',
        //borderRadius: 20,
        fontSize: 20,
        fontFamily: 'Monospace',
        color: '{#5a5757}',
        textAlign: 'center',
        verticalAlign: 'middle'
    }    

    const countertxt = {
        display: 'table', /* keep the background color wrapped tight */
        margin: '0px auto 0px auto', /* keep the table centered */
        padding: '0px',
        fontSize: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#ffffff',
        textAlign: 'center',
        verticalAlign: 'middle'       
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
                     <img className="img-fluid d-md-flex" src="/images/ropi_logo.png" width='300px'
                     styles={{padding: '0px'}} />        

                        <br></br>
                      <h4 className={"font-weight-normal"} style={countertxt} >
                        La monnaie citoyenne montoise </h4>                                                               
                </Col>
{/*                 <Col className={"align-self-end"} style={TableCounter}>
                   
                </Col> */}
                {/* ************ Les compteurs ************ */} 
                        <Col className={"col-lg-3"} >                    
                            <Table size={"lg"} style={TableCounter} >                            
                                <tbody> 
                                    <tr>                                 
                                        <td><h1 style={countertxt}>27 prestataires et associations</h1></td>                                      
                                    </tr>                                     
                                    <tr>                                         
                                        <td><h1 style={countertxt}>3 comptoirs de change</h1></td>                                      
                                    </tr>                                     
                                    <tr> 
                                        <td> <h1 style={countertxt}>5623 Ropi en circulation</h1> </td>                                        
                                    </tr>                                     
                                </tbody>
                            </Table>
                            <img className="img-fluid" src="/images/eventail_billets3_rounded.png" />   
                        </Col>
                        
                            {/* <Table size={"lg"} style={TableCounter} >
                                <thead> <tr><th><h1 style={countertxt}>Comptoirs de change</h1></th> </tr>  </thead>
                                <tbody > <tr> <td><h1 style={countertxt}>2</h1></td> </tr> </tbody>
                            </Table>
                        
                        
                            <Table size={"lg"} style={TableCounter} >
                                <thead> <tr> <th> <h1 style={countertxt}>Ropi en circulation</h1></th></tr> </thead>                                
                                <tbody > <tr> <td> <h1 style={countertxt}>4567</h1> </td> </tr> </tbody>
                            </Table> */}
                        
            </Row>

            {/* Le bas du banner */}
            <Row>
                {/* <Col className={"align-self-start"} style={TableCounter}>
                    <h4 className={"font-weight-normal"} style={countertxt} >
                        La monnaie citoyenne montoise </h4> 
                </Col> */}
                    {/* ************ Les billets Ropi en éventail ************ */}
                {/* <Col md={3} xs={6} className={"align-self-start "}  style={logo}>
                    <Row className="d-md-flex">
                        <Col>                                             
                            <img className="img-fluid" src="/images/eventail_billets3_rounded.png" />                                          
                        </Col>
                    </Row>
                </Col> */}
            </Row>
        </Container>
    )
}


