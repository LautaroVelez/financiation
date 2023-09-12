import React, {useContext, useEffect, useState} from 'react';
import "../assets/styles/FormPage.css";
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import Check from "../assets/images/checked.gif";
import {Link, useNavigate} from "react-router-dom";
import {getVisits} from "../services/VisitServices";
import getAdvisees from "../services/AdviseeServices";
import {getAdvisorUsers} from "../services/AdvisorServices";
import {getFaqs} from "../services/FaqServices";
import {getMinistryDepartments} from "../services/MinistryDepartmentServices";
import Avatar from '@mui/material/Avatar';
import {getUser} from '../services/UserServices';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateTimeField} from '@mui/x-date-pickers/DateTimeField';
import TextField from "@mui/material/TextField";


const FormPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };


    let {authTokens,myUser} = useContext(AuthContext)
    let [ministryDepartments, setMinistryDepartments] = useState([])
    let [faqs, setFaqs] = useState([])
    let [advisors, setAdvisors] = useState([])
    let [user, setUser] = useState([])
    let [advised, setAdvised] = useState([])
    let [visits, setVisits] = useState([])
    let history = useNavigate()
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        getMinistryDepartments(authTokens.access).then(data => setMinistryDepartments(data))
        getFaqs(authTokens.access).then(data => setFaqs(data))
        getAdvisees(authTokens.access).then(data => setAdvised(data))
        getVisits(authTokens.access).then(data => setVisits(data))
        getAdvisorUsers(authTokens.access).then(data => setAdvisors(data))
        getUser(authTokens.access).then(data => setUser(data))

    }, [])

    let postRequest = async (e) => {
        e.preventDefault()
        let response = await fetch(' /api/request/add/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "JWT " + String(authTokens.access),
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "id_visit": e.target.visit.value,
                "id_advised": e.target.advised.value,
                "id_advisor": e.target.advisor.value,
                "id_ministry_department": e.target.ministryDepartment.value,
                "id_faq": e.target.faq.value,
                "id_status": 1
            })
        })
        if (response.status === 200) {
            handleShow()
            await postRequest()
        } else {
            alert('Something went wrong')
        }
    }


    return (
        <Form onSubmit={postRequest}>
            <Container className={'FirstContainerForm'}>
                <Row className='justify-content-center'>
                    <Col md={{span: 3, order:1}} xs={{ span: 6, order: 1 }}>
                        <p className={'pInFormPage'}>Fecha y hora</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimeField
                                format='DD/MM/YYYY HH:mm'
                                label={''}
                                className='InputsFormPage'
                                InputProps={{
                                    sx: {borderRadius: '2vh', height: '7vh', borderColor:'white'}
                                }}
                            />
                        </LocalizationProvider>
                    </Col>
                    <Col md={{span: 4, order: 2}} className={'VisitaDropDown'} xs={{order: 3}}>
                        <p className={'pInFormPage'}>Visita</p>
                        <select
                            placeholder="Visita"
                            className='form-select'
                            name="visit">

                            {visits?.map((visit) => (
                                <option value={visit.id}>{visit.name}</option>
                            ))}
                        </select>


                    </Col>
                    <Col md={{span: 3, order: 3}} xs={{span: 6, order:2}}>
                        <p className={'pInFormPage'}>Asesor</p>
                        <Row className='ContainerPersonForm'>
                            <Col md={4} xs={2} className='justify-content-center d-flex align-items-center col-avatar'>
                                <Avatar alt="Remy Sharp" src={myUser?.profile_picture}
                                        sx={{width: 35, height: 35}}/>
                            </Col>
                            <Col className='d-flex align-items-center text-center'>
                                <p className={'userFirstName'}>{user.first_name}</p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <Container className='justify-content-center'>


                <Row className='justify-content-md-center py-2'>
                    <Col xs={12} md={10}>
                        <p className={'pInFormPage'}>Departamento</p>
                        <select
                            placeholder="Departamento"
                            className='form-select department-select'

                            name="ministryDepartment">

                            {ministryDepartments?.map((ministryDepartment) => (
                                <option value={ministryDepartment.id}>{ministryDepartment.name}</option>
                            ))}

                        </select>
                    </Col>
                </Row>


                <Row className='justify-content-md-center py-2'>
                    <Col xs={12} md={10}>
                        <p className={'pInFormPage'}>Consulta</p>
                        <select
                            placeholder="Departamento"
                            className='form-select department-select'
                            name="faq">
                                {faqs?.map((faq) => (
                                <option value={faq.id}>{faq.name}</option>
                            ))}
                            

                        </select>
                    </Col>
                </Row>


                <Row className='justify-content-md-center py-2'>
                    <Col xs={12} md={10}>
                        <p className={'pInFormPage'}>¿Por que vino?</p>
                        <select
                            placeholder="Por que vino?"
                            className='form-select department-select'

                            name="faq">
                            {faqs?.map((faq) => (
                            <option value={faq.id}>{faq.name}</option>
                        ))}
                            

                        </select>
                    </Col>
                </Row>
            </Container>

            <Container className={'SecondContainerForm'}>
                <Row>
                    <p className={'SecondpInFormPage'}>Cantidad</p>
                    </Row>

                <Row className={'justify-content-start py-2'} xs={12}>
                    <Col md={8} xs={5}>
                        <TextField className={'InputInForm'}
                                   InputProps={{sx: {borderRadius: 4, borderColor: 'white', height: '7vh'}}}/>
                    </Col>
                    <Col md={3} xs={6}>
    
                        <Button type='submit' variant="primary"
                                className='buttonconsulta'>Enviar Consulta</Button>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Container className='justify-content-center'>
                        <Row className='justify-content-center'>
                            <Col md={5}>
                                <img src={Check} alt="CheckButton" className="mx-auto img-fluid"/>
                                <p className="text-center">¡Se ha registrado el asesor correctamente!</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/login'}>
                        <Button variant="success">
                            OK
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Form>

    )
        ;
};


export default FormPage;

