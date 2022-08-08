import NavBar from '../components/Navbar'
import {db} from '../tools/db'
import React from "react";
import Card from '../components/Card'
import { Link } from "react-router-dom";
import './store.css'
const Store = () =>{
    return(
        <div>

            <NavBar />
            <div className="shop_container">
                <h1>Welcome to the store</h1>

                <ul className="cards_container">
                    {db.map((item) =>{
                        return(
                            <li key={item.id} state ={{currentItem: item, all: db}}>
                                <Link to={item.id}>
                                <Card
                                name={item.name}
                                author={item.author}
                                price={item.price}
                                img={item.img}
                                />
                                </Link>
                            </li>

                        )
                    })}
                </ul>
            </div>

        </div>

    )

}


export default Store;