import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Layouts/Nav";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getProducts } from "../../Api/services";
import './index.css';
import Pagination from "../../Utility/pagination";

const Products = () => {
    const [data, setData] = useState(null);
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    // Logic for displaying current products
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const fetchProducts = async () => {
        const { data } = await getProducts();
        const { products } = data;
        setProducts(products);
        setData(data);
    }

    const getProductsHtml = () => {
        if (currentProducts.length > 0) {
            return currentProducts.map((product, index) => {
                const { id, title, description, images, price } = product;
                return <Col xs={6} md={3}><Card>
                    <Card.Img variant="top" src={images[0]} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <Link to={`/product-view/${id}`}>
                                <div >
                                    {description.length >= 137 ? `${description.slice(0, 157)}...` : description}
                                </div>
                            </Link>
                            <div>
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
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Pagination pageNumbers={pageNumbers} currentPage={currentPage} handlePageClick={handlePageClick} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products;