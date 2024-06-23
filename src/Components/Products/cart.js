import { useContext } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { CartContext } from "../../ContextApi/CartContext";
import Nav from "../../Layouts/Nav";
import { Link } from "react-router-dom";
import "./cart.css"; // Import the custom CSS

const Cart = () => {
    const { cart, updateQuantity, removeCartItem } = useContext(CartContext);

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            <Nav />
            <Container>
                <Row>
                    <Col>
                        <h1 className="cart-title">Cart</h1>
                        <ListGroup>
                            {cart.length === 0 ? (
                                <ListGroup.Item>Your cart is empty</ListGroup.Item>
                            ) : (
                                cart.map((item, index) => (

                                    <ListGroup.Item className="cart-item">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="cart-item-thumbnail"
                                        />
                                        <Link to={`/product-view/${item.id}`} key={index} className="cart-item-link">
                                            <div className="cart-item-details">
                                                <span className="cart-item-title">{item.title}</span>
                                                <span className="cart-item-price">
                                                    ${item.price.toFixed(2)} x
                                                    <Form.Control
                                                        as="select"
                                                        value={item.quantity}
                                                        className="cart-item-quantity"
                                                        onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                                                    >
                                                        {[...Array(10).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </span>
                                            </div>
                                        </Link>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            className="cart-item-remove"
                                            onClick={() => removeCartItem(item?.id)}
                                        >
                                            Remove
                                        </Button>
                                    </ListGroup.Item>

                                ))
                            )}
                        </ListGroup>
                        <h2 className="cart-total">Total: ${getTotal()}</h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Cart;
