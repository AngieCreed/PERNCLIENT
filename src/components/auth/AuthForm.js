import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import './auth.css'
    
const AuthForm = (props) => {
    return (
        <div className='chem-bg'>
            <Container className='auth-container'>
                <Row className='row justify-content-center'>
                    <Col sm="4" className='signup-col'>
                        <Signup setToken={props.setToken} /> 
                    </Col>
                    <Col sm="4" className='login-col'>
                        <Login setToken={props.setToken} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AuthForm;

//setToken props is passed from the setSessionState function in app.js