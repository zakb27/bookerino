import React, {useState} from "react";
import logo from '../images/Bookerino-logos_white.png';
import logo2 from '../images/Bookerino-logos_black.png';
import {MenuItems} from "../tools/MenuItems";
import './nav_style.css'
const Navbar = () =>{

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

                                <a className={item.cName}  href={item.url}>
                                    <span className='text-highlight'>{item.title}</span>
                                </a>
                            </li>

                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;