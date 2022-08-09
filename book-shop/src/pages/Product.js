import NavBar from '../components/Navbar'
import {db} from '../tools/db'
import React, { useState } from 'react'
import Card from '../components/Card'
import {Link, useParams} from "react-router-dom";
import {GetItem} from '../components/GetItem'
import { useLocation } from 'react-router-dom';
const Product = ({
                     itemsInCart,
                     cartItemCount,
                     setItemsInCart,
                     setCartItemCount
                 }
                 ) =>{

    const [numberOfItems,setItems] = useState(1);
    // const test = item1.state.currentItem.name;
    let params = useParams();
    const item = (GetItem(params));

    const addToCart = () =>{
        setItemsInCart([...itemsInCart,{...item,quantity:numberOfItems}]);
        setCartItemCount(cartItemCount+1);
    }

    return(
        <div>
            <NavBar />
            <p>{item.name} by {item.author}</p>
            <button onClick={addToCart}>Add to cart</button>
        </div>);
}


export default Product;