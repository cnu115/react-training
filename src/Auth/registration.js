import React, { useState } from "react";
import Nav from "../Layouts/Nav";
import { Button, Card, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '9823212323',
        password: '',
        confirmPassword: ''
    })

    const handleInputChange = (event) => {
        // debugger;
        const { name, value } = event.currentTarget;
        const oldFormValues = { ...formValues }; //spread operator
        oldFormValues[name] = value;
        // console.log('formValues', oldFormValues)
        setFormValues(oldFormValues);
    }

    // console.log('formValues', formValues)

    const handleSubmit = (event) => {
        // debugger;
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        
        const {firstName, lastName, confirmPassword, email, phone, password} = formValues;
        if(firstName !== '' && lastName !== ''  && email !== ''  && phone !== ''  && password !== '' && confirmPassword !== ''){
            createUsersApi();
        }
    }

    const createUsersApi = () => {
        axios.post('https://dummyjson.com/users/add', formValues, {
             'Content-Type': 'application/json' 
        })
        .then((response) => {
            if(response.status === 201){
                alert('register successful');
                setTimeout(()=>{
                    navigate('/login');
                },200);
            }else{
                setError(true);
                setErrorMessage(response.statusText)
            }
        })
        .catch((error) => {
            setError(true)
            setErrorMessage(error.message)
        });
    }

    return (
        <div>
            <Nav />
            <Container className="form-container">
                {error && errorMessage !== '' && <span>{errorMessage}</span>}
                <Card>
                    <Card.Header>Registration</Card.Header>
                    <Card.Body>
                        <Form noValidate={true} validated={validated} onSubmit={(event) => handleSubmit(event)}>
                            <Form.Group className="mb-3" controlId="validationFirstName" >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={(event) => handleInputChange(event)} required name="firstName" type="text" placeholder="John" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={(event) => handleInputChange(event)} required name="lastName" type="text" placeholder="Smith" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter second name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control onChange={(event) => handleInputChange(event)} name="email" type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control onChange={(event) => handleInputChange(event)} name="phone" value={formValues.phone} type="number" placeholder="+91723456789" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required onChange={(event) => handleInputChange(event)} name="password" type="password" placeholder="************" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control required onChange={(event) => handleInputChange(event)} name="confirmPassword"
                                    type="password" placeholder="************"
                                    isInvalid={
                                        validated &&
                                        formValues.confirmPassword !== formValues.password
                                    } />
                                <Form.Control.Feedback type="invalid">
                                    Please enter confirm password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" variant="primary">Register</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Registration;