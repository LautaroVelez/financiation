import React from "react";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import verifyimg from '../assets/images/verifyimg.gif';
import Check from "../assets/images/checked.gif";
import Logo from "../assets/images/LOGOGOBIERNO.png";
import {Link} from "react-router-dom";
import '../assets/styles/ActivateAccountPAge.css'

const ActivateAccountPage = () => {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <Container fluid className="fondo">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xs={6}>
                        <Card id="carta">
                            <Container>
                                <img src={verifyimg} className='imgVerify'/>
                                <h5>Verifique su cuenta</h5>
                                <div className='py-3'>
                                <Button onClick={handleShow}>Verificar</Button>
                                </div>
                            </Container>

                        </Card>
                    </Col>
                </Row>
                <div className="text-center">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <img src={Check} alt="CheckButton" id="CheckButton"/>
                            <p className="text-center">¡Su cuenta ha sido verficada!</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose}>
                                OK
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Container>
        </Container>
    );
}

export default ActivateAccountPage