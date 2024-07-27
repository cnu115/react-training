import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Layouts/Nav";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getProducts } from "../../Api/services";
import './index.css';
import Pagination from "../../Utility/pagination";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Layouts/Loader";

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const [currentProducts, setCurrentProducts] = useState(0);
    const [pageNumbers, setPageNumbers] = useState([]);

    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.products);

    const itemsPerPage = 8;

    console.log('data', data, 'loading', loading)

    // Logic for displaying current products
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Logic for displaying page numbers


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if (data?.products) {
            setCurrentProducts(data?.products.slice(indexOfFirstItem, indexOfLastItem));
            const numbers = [];
            for (let i = 1; i <= Math.ceil(data?.products.length / itemsPerPage); i++) {
                numbers.push(i);
            };
            setPageNumbers(numbers);
        }
    }, [data])

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                                <b>$</b><b><i>{price}</i></b>
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
                {!loading && data?.products ? <>
                    <Row>
                        {getProductsHtml()}
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <Pagination pageNumbers={pageNumbers} currentPage={currentPage} handlePageClick={handlePageClick} />
                        </Col>
                    </Row>
                </> : <Loader />}
            </Container>
        </div>
    )
}

export default Products;