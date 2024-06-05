import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import Nav from "../Layouts/Nav";
import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [validated, setValidated] = useState(false);

    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();

    const { login } = useAuth();

    const handleFormSubmit = (event) => {
        debugger;
        event.preventDefault()
        const target = event.currentTarget;
        if (target.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        if (formValues.username !== "" && formValues.password !== "") {
            handleApi();
        }
    }

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        const oldFormValues = { ...formValues }
        oldFormValues[name] = value;

        setFormValues(oldFormValues);


        // setFormValues({
        //     ...formValues,
        //     [name]: value
        // });

    }

    const handleApi = () => {
        const payload = {
            ...formValues,
            expiresInMins: 30
        }
        axios.post('https://dummyjson.com/auth/login', payload, {
            'Content-Type': 'application/json'
        }).then(res => {
            console.log('res', res);
            if (res.status === 200) {
               
                login(res.data);
                navigate('/');
            }
        }).catch(error => {
            console.error('error', error);
        })
    }

    return (
        <>
            <Nav />
            <Container className="form-container">
                <Card>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={(event) => handleFormSubmit(event)}>
                            {/* 2-way binding */}
                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" name='email' placeholder="name@example.com" onChange={(event) => handleInputChange(event)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter email.
                                </Form.Control.Feedback>
                            </Form.Group> */}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" name='username' placeholder="username" onChange={(event) => handleInputChange(event)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" name="password" placeholder="************" onChange={(event) => handleInputChange(event)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" variant="primary">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Login;