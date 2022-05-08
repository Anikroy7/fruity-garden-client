import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Card, Form, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

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
                if (data.modifiedCount === 1) {
                    toast('Your order is delivered');
                    return
                }

            })

    }


    // handel add to stock

    const handelAddToStock = event => {
        event.preventDefault()
        const InputNumber = event.target.number.value;
        if (InputNumber > 0) {
            let quantity = product.quantity;
            let number = parseInt(InputNumber)
            let newQuantity = quantity + number;
            product.quantity = newQuantity;
            console.log(product);


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
                    if (data.modifiedCount === 1) {
                        toast('Your Stock is added');
                        console.log('fffft');
                    }

                })
        }
        else {
            alert('please give positive value')
        }
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
                <h4 className='mt-5'>Add To Stock</h4>


                <Form onSubmit={handelAddToStock} className="d-flex">
                    <input
                        type="number"
                        placeholder="Add to stock"
                        name='number'
                        className="me-2"

                    />
                    <Button type='submit' variant="outline-success">Add</Button>
                </Form>
            </Card>

        </section>
    );
};

export default Inventory;