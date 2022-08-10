import NavBar from '../components/Navbar'
import { NavLink } from 'react-router-dom';
import {db} from '../tools/db'
import React from "react";
import Card from '../components/Card'
import { Link } from "react-router-dom";
import './store.css'
const Store = ({
                   itemsInCart,
                   cartItemCount,
                   setItemsInCart,
                   setCartItemCount
               }) =>{


    const checkExists = (item) =>{
        let exists = false;
        itemsInCart.find(element=>{
            exists=(element.id===item.id);
        })
        return exists;
    }

    const addItem = (event,item) =>{
        alert("Added to cart")
        if(checkExists(item)){
            console.log("NOW WHAT")
            setItemsInCart(current =>
                current.map(obj => {
                    if (obj.id === item.id) {
                        return {...obj,quantity: obj.quantity+1};
                    }

                    return obj;
                }),
            );
            setCartItemCount(cartItemCount+1);
        }
        else {
            console.log(checkExists(item))
            setItemsInCart([...itemsInCart, {...item, quantity: 1}]);
            setCartItemCount(cartItemCount + 1);
        }
    }

    return(
        <div className="shop_container">

            <NavBar cartItemCount={cartItemCount}/>
            <div className="display_container">
                <ul className="cards_container">
                    {db.map((item) =>{
                        return(
                            <li key={item.id}>
                                <Link
                                    as={NavLink}
                                    to={{
                                        pathname: `/store/${item.name}`,
                                        state: { currentItem: item, all: db },
                                    }}
                                    key={item.id}

                                >
                                    <Card
                                        name={item.name}
                                        author={item.author}
                                        price={item.price}
                                        img={item.img}
                                    />

                                </Link>
                                <button className='quick_button' onClick={event =>addItem(event,item)}>Quick add</button>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>

    )

}


export default Store;