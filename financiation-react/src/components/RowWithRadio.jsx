import {Col, Form, Row} from "react-bootstrap";
import React from "react";
import '../assets/styles/RowWithCheck.css'

export const RowWithRadio = ({item}) => {
    return (
        <Row key={item.id}>
            <Col className='row-label'>
                <Form.Label>{item.name}</Form.Label>
            </Col>
            <Col className='row-check'>
                <Form.Check type="radio" value={item.id}></Form.Check>
            </Col>
        </Row>
    )
}

export default RowWithRadio
