import NavBar from '../components/Navbar'
import React, { useState } from 'react'
import {Link, useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";
import './cart.css'
const Cart = ({
                  itemsInCart,
                  cartItemCount,
                  setItemsInCart,
                  setCartItemCount
              }) =>{
    console.log(itemsInCart);


    const removeItem = (event,item) =>{
        setCartItemCount(cartItemCount - item.quantity);
        setItemsInCart([...itemsInCart.filter((el) => el.id !== item.id)])
    }

    const calculateSubPrice = (item) =>{
        return (((item.price*item.quantity) / 100).toFixed(2));
    }

    return(<div>
        <NavBar cartItemCount={cartItemCount}/>
        <h1>Your cart</h1>
        <table className="styled-table">
            <thead><tr>
                <th>&nbsp;</th>
                <th>Book</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>&nbsp;</th>
            </tr></thead>
            <tbody>
            {itemsInCart.map((item,index) =>{
                return(
                    <tr key={index}>
                        <td>
                            <img src={item.img} alt=""/>
                        </td>
                        <td>
                            <Link as={NavLink} to={{pathname: `/store/${item.name}`}}>{item.name}</Link>
                        </td>
                        <td>
                            £ {((item.price*item.quantity) / 100).toFixed(2)}
                        </td>
                        <td>
                            {item.quantity}
                        </td>
                        <td>
                            £ {calculateSubPrice(item)}
                        </td>
                        <button className='remove'onClick={event =>removeItem(event,item)}  ><i className="uil uil-trash-alt"></i></button>

                </tr>
                )
            })}
            </tbody>
        </table>
    </div>)
}

export default Cart;