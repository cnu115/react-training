import React, { useState } from "react";
import Nav from "../Layouts/Nav";
import { Button, Card, Container, Form } from "react-bootstrap";

const Registration = () => {


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        // debugger;
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
    }

    //     "firstName": "Emily",
    //   "lastName": "Johnson",
    //   "maidenName": "Smith",
    //   "age": 28,
    //   "gender": "female",
    //   "email": "emily.johnson@x.dummyjson.com",
    //   "phone": "+81 965-431-3024"
    return (
        <div>
            <Nav />
            <Container className="form-container">
                <Card>
                    <Card.Header>Registration</Card.Header>
                    <Card.Body>
                        <Form noValidate={true} validated={validated} onSubmit={(event) => handleSubmit(event)}>
                            <Form.Group className="mb-3" controlId="validationFirstName" >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required name="firstName" type="text" placeholder="John" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required name="lastName" type="text" placeholder="Smith" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter second name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control name="phone" type="number" placeholder="+91723456789" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="************" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name="confirmPassword" type="password" placeholder="************" />
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