import styles from './css/Paragraphe.module.css';
import React from "react";
import {Col, Row} from "react-bootstrap";
import DOMPurify from 'isomorphic-dompurify';
import PropTypes from 'prop-types';


export default function Paragraphe(props){
    return(
        <Row>
            <Col>
                <Row className={styles.paragrapheTitle}>
                    <h2>{props.titre}</h2>
                </Row>
                <Row className={styles.paragrapheContent}>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.children)}} />
                </Row>
            </Col>
        </Row>
    )
}

Paragraphe.propTypes = {
    titre: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}
