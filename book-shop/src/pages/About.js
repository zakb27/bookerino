import NavBar from '../components/Navbar'
import {db} from '../tools/db'
import React, { useState } from 'react'
import Card from '../components/Card'
import {Link, NavLink, useParams} from "react-router-dom";
import {GetItem} from '../components/GetItem'
import { useLocation } from 'react-router-dom';
const About = ({
    itemsInCart,
    cartItemCount,
    setItemsInCart,
    setCartItemCount
}) => {
    return(<div>
        <NavBar cartItemCount={cartItemCount}/>
        <h1>COMING SOON UNDER CONSTRUCTION</h1>
    </div>)
}

export default About