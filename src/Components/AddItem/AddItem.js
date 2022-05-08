import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`calm-anchorage-95986.herokuapp.com/product`, {
            method: 'POST',
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
                <input className='mb-2' value={user.email} readOnly placeholder='Your email' {...register("email")} /> <br />
                <input className='mb-2' type='number' placeholder='price' {...register("price")} /> <br />
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
