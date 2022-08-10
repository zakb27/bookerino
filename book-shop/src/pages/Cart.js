import NavBar from '../components/Navbar'
import {db} from '../tools/db'
import React, { useState } from 'react'
import Card from '../components/Card'
import {Link, useParams} from "react-router-dom";
import {GetItem} from '../components/GetItem'
import { useLocation } from 'react-router-dom';


const Cart = ({
                  itemsInCart,
                  cartItemCount,
                  setItemsInCart,
                  setCartItemCount
              }) =>{
    console.log(itemsInCart);
    return(<div>
        <NavBar cartItemCount={cartItemCount}/>
        {itemsInCart.map((item,index) =>{
            return(<div key={index}>
                {item.name} + {item.quantity}
            </div>)
        })}
    </div>)
}

export default Cart;