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
import { Select, MenuItem } from '@mui/material';
import {getLocations} from '../services/LocationServices';


export const MayorCreateModal = (props) => {

    let {authTokens} = useContext(AuthContext)
    const [selectedLocalidad, setSelectedLocalidad] = useState('');
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    let [locations, setLocations] = useState([])
    const [showfail, setShowfailture] = useState(false);
    const [showsuccess, setShowsuccese] = useState(false);
    const toggleModalsucceed = () => setShowsuccese(!showsuccess);
    const toggleModalfailed = () => setShowfailture(!showfail);

    useEffect(() => {
        getLocations(authTokens.access).then(data => setLocations(data))
    }, [])

    let postMayor = async () => {
        console.log('aaa')
        let response = await fetch('/api/mayors', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "JWT " + String(authTokens.access),
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "first_name": first_name,
                "last_name": last_name,
                "location": selectedLocalidad
            })
        });
    
        if (response.status === 200) {
            toggleModalsucceed();
            props.setUpdateFlag((prevFlag) => !prevFlag);
        } else if (response.status === 500) {
            toggleModalfailed();
        }
    }
    
    return (
            <Modal className='modalcreate' show={props.show} >
                <SucceedModal onClose={() => toggleModalsucceed()} message="la visita" show={showsuccess}/>
                <FailedModal onClose={() => toggleModalfailed()} message="la visita" show={showfail}/>
                <Container className="containermayor container-addmayor-modal">

                    <Form className='datos'>
                        <h3 className={'h3LoginPage'}>Ingresar Intendente</h3>

                        <div className='datosin' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Form.Group style={{ textAlign: 'center', marginRight: '10px' }}>
                                <TextField
                                    className="input"
                                    label="Nombre"
                                    name='first_name'
                                    onChange={(e) => setFirstName(e.target.value)}
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
                            <Form.Group style={{ textAlign: 'center' }}>
                                <TextField
                                    className="input"
                                    label="Apellido"
                                    name='last_name'
                                    onChange={(e) => setLastName(e.target.value)}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircleOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                        sx: { borderRadius: 6, borderColor: '#f4f4f4' },
                                    }}
                                />
                            </Form.Group>  
                        </div>
                        <div>
                            <Form.Group style={{ textAlign: 'center', marginRight: '10px' }}>
                                <Select
                                    label="Localidad"
                                    name='location'
                                    value={selectedLocalidad}
                                    onChange={(e) => setSelectedLocalidad(e.target.value)}
                                    variant="outlined"
                                    sx={{ width: '100%', height: '48px' }} 
                                >
                                    {locations?.map((location) => (
                                        <MenuItem value={location.id}>{location.name}</MenuItem>
                                    ))}    
                                </Select>
                            </Form.Group>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Button className='BtnIniciarSesionLogin btnregis' onClick={postMayor}>Registrar</Button>
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

export default MayorCreateModal