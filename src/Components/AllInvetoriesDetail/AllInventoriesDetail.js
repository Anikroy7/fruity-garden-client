import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../hooks/useProducts';

const AllInventoriesDetail = ({ product }) => {


    const { name, description, supplier, quantity, img, discount, ratings, price, _id } = product;
    const [products, setProducts] = useProducts();

    const handelDelete = (id) => {
        const procced = window.confirm('Your item will be deleted??')
        if (procced) {
            const url = `https://calm-anchorage-95986.herokuapp.com/product/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        const remaining = products.filter(pd => pd._id !== id)
                        console.log(remaining);
                        setProducts(remaining)
                        toast('Your ietm is deleted')
                    }
                })
        }
    }

    return (
        <section className='product'>

            <div className='shadow-sm mb-5 bg-body rounded border product-detail'>
                <button className='px-3 mb-2 rounded'>{discount}% off</button>
                <h5 className='ms-3 mt-2'>{name}</h5>
                <p className='ratings ms-3 text-success'>
                    {ratings}
                </p>
                <p className='ms-3 mt-2'>{description}</p>
                <h5 className='ms-3 mb-2'>Supplier: {supplier}</h5>
                <div className='image-container'>
                    <h5 className='ms-3 mt-2'>Quantity: {quantity}</h5>
                    <p className='ms-3 mb-0'>$<span className='price'>{price}</span></p>

                    <img src={img} alt="" />
                </div>
                <button onClick={() => handelDelete(_id)} className='update-button rounded'>

                    Delete Stock<FontAwesomeIcon className='ms-2' icon={faDeleteLeft}></FontAwesomeIcon></button>
            </div>
            <div>

            </div>
        </section>
    )
};

export default AllInventoriesDetail;