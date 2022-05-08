import React from 'react';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/product', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your item is added')
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center mb-5 me-5'>Add To Stock</h1>
            <form className='d-flex-flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='product name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} /> <br />
                <input className='mb-2' placeholder='Your email' {...register("email")} /> <br />
                <input className='mb-2' type='number' placeholder='Your name' {...register("price")} /> <br />
                <input className='mb-2' type='number' placeholder='discount' {...register("discount")} /> <br />
                <input className='mb-2' type='number' placeholder='quantity' {...register("quantity")} /> <br />
                <input className='mb-2' type='text' placeholder='Photo url' {...register("img")} /> <br />
                <input className='mb-2' placeholder='description' type="text" {...register("description")} /> <br />
                <input className='btn btn-success' type="submit" value='Add to Stock' />
            </form>
        </div>

    );
}
export default AddItem;
