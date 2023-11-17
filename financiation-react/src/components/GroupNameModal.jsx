import '../assets/styles/RowWithCheck.css'
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Container, Card } from 'react-bootstrap';
import '../assets/styles/AddMayorPage.css';
import FailedModal from "../components/FailedModal";
import SucceedModal from "../components/SucceedModal";
import {message} from 'antd';

export const GroupNameModal = (props, advisors, coordinators) => {

    let {authTokens} = useContext(AuthContext)
    const [name, setName] = useState("");
    const [showfail, setShowfailture] = useState(false);
    const [showsuccess, setShowsuccese] = useState(false);
    const toggleModalsucceed = () => setShowsuccese(!showsuccess);
    const toggleModalfailed = () => setShowfailture(!showfail);

    let postGroup = async (e) => {
            let response = await fetch('/api/creategroup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "JWT " + String(authTokens.access),
                    "Accept": "application/json"
                },
                body: JSON.stringify({ 
                    "name": name,
                    "advisors": advisors,
                    "coordinators": coordinators
                })
            })
            if (response.status === 200) {
                // toggleModalsucceed();
                message.success('Se agregó el acuerdo exitosamente');
                props.onClose();
            } else {
                console.error("No se pudo agregar el acuerdo");
                props.onClose()
            }
        }

    
    return (
            <Modal className='modalcreate' show={props.show} >
                <SucceedModal onClose={() => toggleModalsucceed()} message="la visita" show={showsuccess}/>
                <FailedModal onClose={() => toggleModalfailed()} message="la visita" show={showfail}/>
                <Container className="containermayor container-addmayor-modal">

                    <Form className='datos'>
                        <h3 className={'h3LoginPage'}>Crear Grupo</h3>

                        <div className='datosin' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Form.Group style={{ textAlign: 'center', marginRight: '10px' }}>
                                <TextField
                                    className="input"
                                    label="Nombre"
                                    name='name'
                                    onChange={(e) => setName(e.target.value)}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" >
                                                <AccountCircleOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                        sx: { borderRadius: 6, borderColor: '#f4f4f4' },
                                    }}
                                />
                            </Form.Group>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Button className='BtnIniciarSesionLogin btnregis' onClick={postGroup}>Registrar</Button>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <Button variant="outlined" color="primary" onClick={props.onClose}>
                                Cancelar
                            </Button>
                        </div>
                    </Form>
                </Container>
            </Modal>


    )
}

export default GroupNameModal