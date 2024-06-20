import { Breadcrumb, Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Nav from "../../Layouts/Nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../Api/services";

const ProductView = () => {

    const [product, setProduct] = useState(null);

    let { id } = useParams();


    useEffect(() => {
        fetchProductDetails();
    }, [id])

    //use try and catch 
    const fetchProductDetails = async () => {
        const { data } = await getProduct(id);
        setProduct(data);
    }

    const getCarouselItems = () => {
        return product.images.map((image, index) => {
            return <Carousel.Item key={index}>
                <Image
                    className="d-block w-100"
                    src={image}
                    alt={`${index} slide`}
                />
            </Carousel.Item>
        })
    }

    return (
        <>
            <Nav />
            <Container>
                {/* Breadcrumb */}
                {product !== null &&
                    <Breadcrumb className="my-3">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
                    </Breadcrumb>
                }
                {product !== null &&
                    <Row className="mt-4">
                        <Col md={6}>
                            <Carousel variant="dark">
                                {getCarouselItems()}
                                {/* Add more Carousel.Items for additional images */}
                            </Carousel>
                        </Col>
                        <Col md={6}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <Button variant="primary">Add to Cart</Button>
                        </Col>
                    </Row>
                }
            </Container>
        </>
    )
}

export default ProductView;