import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../../Api/services';
import Loader from '../../../Layouts/Loader';

const Products = () => {

    const { data, loading, error } = useSelector((state) => state.products)

    const dispatch = useDispatch();

    console.log('loading', loading, 'data', data)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    // console.log('data', data)

    const handleDelete = (id) => {
        // debugger
        dispatch(deleteProduct(id));
    }

    const getTableBody = () => {
        const { products } = data;
        if (products.length > 0) {
            return products.map((product, index) => {
                const { id, title, brand, category, price } = product;
                return <tr key={`${title}_${index}`}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{brand}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>
                        <Button variant='primary' >Edit</Button>
                        {' '}
                        <Button variant='danger' onClick={() => handleDelete(id)}>Delete</Button>
                    </td>
                </tr>
            })
        }
    }

    return (
        <div className="main-content">
            <Container>
                <Row>
                    <Col sm={6}>
                        <h2>Products</h2>
                    </Col>
                    <Col sm={6} className="d-flex justify-content-end">
                        <div className="d-grid gap-2">
                            <Button variant="primary">
                                Add
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        {!loading && data?.products ?
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Brand</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getTableBody()}
                                </tbody>
                            </Table>
                            : <Loader />
                        }
                    </Col>
                    {/* You can add more columns/cards here for other products */}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
