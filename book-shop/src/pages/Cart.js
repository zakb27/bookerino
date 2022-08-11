import NavBar from '../components/Navbar'
import React, { useState } from 'react'
import {Link, useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";
import './cart.css'
const Cart = ({
                  itemsInCart,
                  cartItemCount,
                  setItemsInCart,
                  setCartItemCount,
                  changeCart,
              }) =>{


    const removeItem = (event,item) =>{
        setItemsInCart([...itemsInCart.filter((el) => el.id !== item.id)])
        changeCart();
    }

    const calculateSubPrice = (item) =>{
        return (((item.price*item.quantity) / 100));
    }

    const calculateTotalPrice = ()=>{
        let total=0;
        for (let i=0;i<itemsInCart.length;i++){
            total = total+ calculateSubPrice(itemsInCart[i]);
        }
        return total;
    }

    const updateCart = (event,item) =>{
            if(event.target.value) {
                let inst=0;

                setItemsInCart(current =>
                    current.map(obj => {
                        if (obj.id === item.id) {
                            inst= obj.quantity;
                            return {...obj, quantity: parseInt(event.target.value)};


                        }

                        return obj;
                    }),
                );
                changeCart();
            }
        }




    return(<div className='cart_container'>
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
                    <tr key={index} className='cart_row'>
                        <td>
                            <img src={item.img} alt=""/>
                        </td>
                        <td>
                            <Link as={NavLink} to={{pathname: `/shop/${item.name}`}}>{item.name}</Link>
                        </td>
                        <td>
                            £ {((item.price) / 100).toFixed(2)}
                        </td>
                        <td>
                            <input type="number" value = {item.quantity} onChange={(e)=>
                                updateCart(e,item)} min='1' required/>
                        </td>
                        <td>
                            £ {calculateSubPrice(item).toFixed(2)}
                        </td>
                        <button className='remove'onClick={event =>removeItem(event,item)}  ><i className="uil uil-trash-alt"></i></button>

                </tr>
                )
            })}
            </tbody>
        </table>
        <div className='checkout'>
        <h3>Total</h3>
        <h4>£{calculateTotalPrice().toFixed(2)}</h4>
        <button onClick={(e)=>{window.location.reload();}}>Checkout</button>
        </div>
    </div>);
}

export default Cart;