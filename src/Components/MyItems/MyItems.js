import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemsDetail from '../MyItemsDetail/MyItemsDetail';

const MyItems = () => {
    const [allItems, setAllItems] = useState([]);
    const [user] = useAuthState(auth)


    const myItems = allItems.filter(item => item.email === user.email)

    console.log(myItems);

    useEffect(() => {

        fetch(`https://calm-anchorage-95986.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => {
                setAllItems(data);
                console.log('this is ', data);
            })
    }, [user])
    return (
        <div>
            {
                myItems.map(i => <MyItemsDetail
                    key={i._id}
                    item={i}
                ></MyItemsDetail>)
            }

        </div >
    );
};

export default MyItems;