import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Layouts/Nav";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getProducts } from "../../Api/services";
import './index.css';

const Products = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        const { data } = await getProducts();
        setData(data);
    }

    const getProductsHtml = () => {
        if (data !== null && data.products.length > 0) {
            return data.products.map((product, index) => {
                const { title, description, images, price } = product;
                return <Col xs={3}><Card>
                    <Card.Img variant="top" src={images[0]} style={{ width: '284px', height: "284px" }} />
                    <Card.Body>
                        <Card.Title style={{ height: "48px" }}>{title}</Card.Title>
                        <Card.Text>
                            <Link to={'/product'} style={{textDecoration: 'none', color:"black"}}>
                                <div style={{ height: "125px" }}>
                                    {description.length >= 137 ? `${description.slice(0, 157)}...` : description}
                                </div>
                            </Link>
                            <div style={{ height: '15px' }}>
                                <b>Rs</b> <b><i>{price}</i></b>
                            </div>

                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            });
        }
    }

    return (
        <div>
            <Nav />
            <Container>
                <Row>
                    {getProductsHtml()}
                </Row>
            </Container>
        </div>
    )
}

export default Products;