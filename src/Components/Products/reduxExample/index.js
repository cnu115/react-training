import { useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Nav from "../../../Layouts/Nav";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../actions";

const ReduxExample = () => {
    //   const [count, setCount] = useState(0);
    const count = useSelector((state) => state.counter.value); // state management
    const { data, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch(); // triggering the actions

    console.log('data', data)

    const incrementCounter = () => {
        // setCount(count + 1);
        dispatch(increment())
    };

    const decrementCounter = () => {
        // setCount(count - 1);
        dispatch(decrement())
    };

    return (
        <div>
            <Nav />
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Counter: {count}</Card.Title>
                                <Button variant="primary" onClick={incrementCounter} className="m-2">
                                    Increment
                                </Button>
                                <Button variant="danger" onClick={decrementCounter} className="m-2">
                                    Decrement
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReduxExample;
