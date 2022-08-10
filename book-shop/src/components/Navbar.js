import React from "react";
import logo from '../images/Bookerino-logos_white.png';
import logo2 from '../images/Bookerino-logos_black.png';
import {MenuItems} from "../tools/MenuItems";
import './nav_style.css'
import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = ({cartItemCount =0}) =>{
    return (
        <header>
            <nav className={'NavbarItems'}>
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className='logo'/>
                    <img src={logo2} alt="Logo" className='logo-hovered'/>
                </div>
                <ul>
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <Link
                                    as={NavLink}
                                    to={item.url}
                                    className={item.cName}
                                >
                                    <span className='text-highlight'>{item.title}</span>
                                </Link>
                            </li>

                        )
                    })}
                    <li>
                        <Link
                            as={NavLink}
                            to='/cart'
                            className='nav-links'
                        >
                            <span className='text-highlight'><i className="uil uil-shopping-cart"></i>
                                {cartItemCount.toString()}</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar;