import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    console.log(product);
    const handelDelivered = () => {
        let quantity = product.quantity;
        quantity = quantity - 1;
        product.quantity = quantity;

        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log('clicked');
            })

    }

    return (
        <section className='d-flex justify-content-center' >
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price : ${product.price}</ListGroupItem>
                    <ListGroupItem>Avilable :{product.quantity}</ListGroupItem>
                    <ListGroupItem>Supplier Name: {product.supplier}</ListGroupItem>
                </ListGroup>

                <Button onClick={handelDelivered} className='w-100' variant="outline-success">Deleiverd</Button>

            </Card>
        </section>
    );
};

export default Inventory;