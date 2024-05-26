import React from "react"
import Form from 'react-bootstrap/Form';
import Nav from "../Layouts/Nav";
import { Button, Card, Container } from "react-bootstrap";

const Login = () => {
    return (
        <>
            <Nav />
            <Container className="form-container">
                <Card>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="************" />
                            </Form.Group>
                            <Button variant="primary">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Login;