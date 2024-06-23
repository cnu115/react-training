import { Breadcrumb, Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Nav from "../../Layouts/Nav";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../Api/services";
import { CartContext } from "../../ContextApi/CartContext";
import StarRating from "../../Utility/StarRating";
import StarRatings from 'react-star-ratings';

const ProductView = () => {

    const [product, setProduct] = useState(null);

    const { addToCart } = useContext(CartContext);

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
                        <Breadcrumb.Item ><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item ><Link to={'/'}>Products</Link></Breadcrumb.Item>
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
                            <StarRating productRating={product?.rating}/>
                            
                            {/* <StarRatings
                                rating={product?.rating}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="red"
                            /> */}
                            <br />
                            <p>Price: ${product.price}</p>

                            <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                        </Col>
                    </Row>
                }
            </Container>
        </>
    )
}

export default ProductView;