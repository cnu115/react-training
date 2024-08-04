import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts, updateProduct } from '../../../Api/services';
import Loader from '../../../Layouts/Loader';
import BootstrapToast from '../../../Utility/Toast';
import Pagination from '../../../Utility/pagination';

const Products = () => {

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({});

    const [currentProducts, setCurrentProducts] = useState([]);

    const [toast, setToast] = useState({
        variant: 'Success',
        title: '',
        body: '',
    })

    const [showToast, setShowToast] = useState(false);

    const [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading, error } = useSelector((state) => state.products);

    const itemsPerPage = 10;

    const dispatch = useDispatch();

    // console.log('loading', loading, 'data', data)


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {

        if (data?.products && data?.products.length > 0) {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;

            setCurrentProducts(data?.products.slice(indexOfFirstItem, indexOfLastItem));

            const numbers = [];
            for (let i = 1; i <= Math.ceil(data.products.length / itemsPerPage); i++) {
                numbers.push(i);
            };
            setPageNumbers(numbers);
        }

    }, [data, currentPage]);

    // console.log('data', data)

    const handleDelete = (id) => {
        // debugger
        dispatch(deleteProduct(id));
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleEdit = (product) => {
        setShow(true);
        setProduct(product)
    }

    const getTableBody = () => {

        if (currentProducts.length > 0) {
            return currentProducts.map((product, index) => {
                const { id, title, brand, category, price } = product;
                return <tr key={`${title}_${index}`}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{brand}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>
                        <Button variant='primary' onClick={() => handleEdit(product)}>Edit</Button>
                        {' '}
                        <Button variant='danger' onClick={() => handleDelete(id)}>Delete</Button>
                    </td>
                </tr>
            })
        }
    }

    const handleInputChange = (event) => {
        // debugger;
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleUpdate = () => {
        dispatch(updateProduct(product));
        setShowToast(true);
        setToast({
            ...toast,
            title: 'Product Update',
            body: 'Product Updated Successfully!'
        })
        handleClose(false);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="main-content">
            <BootstrapToast
                variant={toast.variant}
                title={toast.title}
                body={toast.body}
                show={showToast}
                setShow={setShowToast}
            />
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
                            <>
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
                                <Pagination pageNumbers={pageNumbers} currentPage={currentPage} handlePageClick={handlePageClick} />
                            </>
                            : <Loader />
                        }
                    </Col>
                    {/* You can add more columns/cards here for other products */}
                </Row>
            </Container>
            {show &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" value={product?.title} onChange={(e) => handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="brand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control type="text" name="brand" value={product?.brand} onChange={(e) => handleInputChange(e)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </div>
    );
};

export default Products;
