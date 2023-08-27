import React, {Fragment, useContext, useEffect, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/NavbarComponent.css"
import logofinanzas from '../assets/images/LOGOGOBIERNO.png';
import Logo from "../assets/images/LOGOGOBIERNO.png";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import {getUser} from "../services/UserServices";

const NavbarComponent = () => {

    let {user, logoutUser} = useContext(AuthContext)

    /*
    useEffect(() => {
        getUser(authTokens.access).then(data => setUser(data))
    })
     */
    return (

        <Navbar expand="lg" id="navbarcs" className="navbarcs">
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand>
                        <img src={Logo} id='logoboton' alt="logo de ministerio de finanzas" className={'ImgNavBar'}/>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="navbarScroll"/>

                <Navbar.Collapse>
                    {user ? (
                        <Container fluid>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                    <div className="mx-2">
                                        <Link>
                                            <Button variant="text" className={'BtnNavBar'}>Calendario</Button>

                                        </Link>
                                    </div>
                                    <div className="mx-2">
                                        <Link to="/form/">
                                            <Button variant="text" className={'BtnNavBar'}>Formulario</Button>

                                        </Link>
                                    </div>
                                    <div className="mx-2">
                                        <Link to="/reports/">
                                            <Button variant="text" className={'BtnNavBar'}>Reportes</Button>
                                        </Link>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-center justify-content-md-end">
                                    <div className="mx-2">
                                        <Row className={'justify-content-center'}>
                                            <Col md={3} xs={3} className={'justify-content-center'}>
                                                <Avatar alt="Remy Sharp" src={user?.profile_picture}
                                                        sx={{width: 40, height: 40}}/>
                                            </Col>
                                            <Col md={9} xs={9} className={'justify-content-center'}>
                                                <Row className={'justify-content-center text-center'}>
                                                    <small className={'aNavBar'}>¡Hola {user.first_name}!</small>
                                                </Row>
                                                <Row className={'justify-content-center text-center'}>
                                                    <Link to="/me/">
                                                        <a className={'aNavBar'}>Ver perfil</a>
                                                    </Link>
                                                </Row>
                                            </Col>

                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </Container>

                    ) : (
                        <Fragment>
                            <Container fluid>
                                <Row>
                                    <Col className="d-flex justify-content-end">
                                        <div className='mx-2'>
                                            <Link to='/login/'>
                                                <Button variant="text" className={'BtnNavBar'}>Iniciar Sesión</Button>
                                            </Link>
                                        </div>
                                        <div className="mx-2">
                                            <Link to='/signin/'>
                                                <Button variant="text" className={'BtnNavBar'}>Crear Cuenta</Button>
                                            </Link>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </Fragment>

                    )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavbarComponent;