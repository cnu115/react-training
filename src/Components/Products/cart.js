import { useContext } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { CartContext } from "../../ContextApi/CartContext";
import Nav from "../../Layouts/Nav";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);

    const getTotal = () =>{
        return 1;
    }

    return (
        <>
            <Nav />
            <Container>
                <Row>
                    <Col>
                        <h1>Cart</h1>
                        <ListGroup>
                            {cart.length === 0 ? (
                                <ListGroup.Item>Your cart is empty</ListGroup.Item>
                            ) : (
                                cart.map((item, index) => (
                                    <Link to={`/product-view/${item.id}`}>
                                        <ListGroup.Item key={index}>
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                            />
                                            {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                // onClick={() => removeFromCart(item)}
                                                style={{ float: 'right' }}
                                            >
                                                Remove
                                            </Button>
                                            <Form.Control
                                                as="select"
                                                value={item.quantity}
                                                // onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                                                style={{ width: '60px', float: 'right' }}
                                            >
                                                {[...Array(10).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </ListGroup.Item>
                                    </Link>
                                ))
                            )}
                        </ListGroup>
                        <h2>Total: ${getTotal()}</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;