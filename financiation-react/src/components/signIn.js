import React from 'react';
import '../assets/images/PRUEBA.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/signIn.css';
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import PasswordInput from "./PasswordInput";

let Logo = require('../assets/images/PRUEBA.PNG');


function SignInForm() {
    return (
        <Container fluid className="general">
            <Form>
                <Row>
                    <Col lg="6">
                        <Form.Control placeholder="First name" type="text"/>
                    </Col>
                    <Col lg="6">
                        <Form.Control placeholder="Last name" type="text"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <Form.Control placeholder="Username" type="text"/>
                    </Col>
                    <Col lg="6">
                        <Form.Control placeholder="SSN" type="number"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <Form.Control placeholder="e-mail" type="email"/>
                    </Col>
                    <Col lg="6">
                        <Form.Control placeholder="phone" type="tel"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <PasswordInput />
                    </Col>
                    <Col lg="6">
                        <PasswordInput />
                    </Col>
                </Row>
                <Row>
                    <Button>Create Account</Button>
                </Row>
                <Row>
                    <Button variant="link">Already have an account? LogIn</Button>
                </Row>
            </Form>
        </Container>


    );
}


export default SignInForm;