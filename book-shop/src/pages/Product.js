import NavBar from '../components/Navbar'
import {db} from '../tools/db'
import React from "react";
import Card from '../components/Card'
import { Link } from "react-router-dom";

const Product = (itemsInCart,
                 cartItemCount,
                 setItemsInCart,
                 setCartItemCount,
                 item1,item2) =>{


    const test = item1.state.item.name;

    return(<div>{test}</div>);
}


export default Product;