import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth)
    console.log(myItems);
    useEffect(() => {

        fetch(`calm-anchorage-95986.herokuapp.com/product?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyItems(data);
                console.log('this is ', data);
            })
    }, [user])
    return (
        <div>
            <h4>this is my item :{myItems?.length}</h4>
        </div>
    );
};

export default MyItems;