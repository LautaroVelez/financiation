import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../assets/styles/AdvisorCard.css";
import AuthContext from "../context/AuthContext";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import { Zoom } from "@mui/material";
import { getUserStatusesById } from "../services/StatusServices";
import { getUserRolesById } from "../services/RoleServices";
import { Tooltip } from 'antd';

export const UserCard = ({ user, isChecked, onCheckboxChange, selectedAdvisors, selectedCoordinators }) => {
    const { authTokens } = useContext(AuthContext);
    const [role, setRole] = useState([]);
    const [status, setStatus] = useState([]);
    const [selectedRole, setSelectedRole] = useState(null);

    const handleCheckboxChange = () => {
        onCheckboxChange(user.id, selectedRole);
    };

    useEffect(() => {
        getUserStatusesById(authTokens.access, user?.user_status).then(data => setStatus(data))
        getUserRolesById(authTokens.access, user?.role).then(data => setRole(data))
    }, [authTokens.access, user]);

    return (
        <>
            <Tooltip title="Seleccione el rol que tendra el usuario antes de agregarlo" placement="right" color='blue' key='blue'>
                <Zoom in style={{ transitionDelay: '200ms' }}>
                    <div className={'UserCard font'}>
                        <Container>
                            <Card className='UserCard font'>
                                <Container className='UserCard'>
                                    <Row key={user.id}>
                                        <Col md={1} xs={1} className='profileimage'>
                                            <Avatar className='avatar' alt="Remy Sharp" src={'data:image/png;base64, ' + user?.profile_picture} />
                                        </Col>
                                        <Col xs={3} md={3} className='name'>
                                            <Row>
                                                <strong>
                                                    <p>{user.first_name} {user.last_name}</p>
                                                </strong>
                                            </Row>
                                            <Row>
                                                <small>{role.name}</small>
                                            </Row>
                                        </Col>
                                        {status.name === 'Disponible' ? (
                                            <Col xs={3} md={3} className='status'>
                                                <a>{status.name} <a className='circle_green'></a></a>
                                            </Col>
                                        ) : (
                                            <Col xs={3} md={3} className='status'>
                                                <a>{status.name} <a className='circle_red'></a></a>
                                            </Col>
                                        )}
                                        {status.name === 'Disponible' ? (
                                            <Col xs={2} md={3} className='role content-select'>
                                                <select
                                                    placeholder="Rol en grupo"
                                                    className='form-select '
                                                    name="Role"
                                                    value={selectedRole}
                                                    onChange={(e) => setSelectedRole(e.target.value)}
                                                >
                                                    <option value="none" disabled hidden selected>Seleccionar</option>
                                                    <option value="coordinador">Coordinador</option>
                                                    <option value="asesor">Asesor</option>
                                                </select>
                                                <i></i>
                                            </Col>
                                        ) : (
                                            <Col xs={5} md={5} className='roleocupado'>
                                                <a>Este usuario se encuentra ocupado</a>
                                            </Col>
                                        )}
                                        {status.name === 'Disponible' ? (
                                            <Col xs={2} md={2} className='check'>
                                                <Row>
                                                    <input
                                                        type="checkbox"
                                                        className='check'
                                                        checked={isChecked && selectedRole !== null}
                                                        onChange={handleCheckboxChange}
                                                        disabled={!selectedRole}
                                                    />
                                                </Row>
                                            </Col>
                                        ) : (
                                            <Col>
                                            </Col>
                                        )}
                                    </Row>
                                </Container>
                            </Card>
                        </Container>
                    </div>
                </Zoom>
            </Tooltip>
        </>
    );
};

export default UserCard;