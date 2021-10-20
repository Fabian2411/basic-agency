import React from 'react';
import './Navigation.scss';
import navlogo from '../../assets/img/logo.svg';
import menu from '../../assets/img/menu.svg';

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// sfc
const Navigation = () => {
    return (
        <section className='navigation'>
            <nav>
            <Link exact to="/">
                            <img src={navlogo} className="nav_logo"  alt="" />
                        </Link>
                <ul>
                    <li>
                        <NavLink exact to="/work">
                            WORK
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/news">
                            NEWS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/thinking">
                            THINKING
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">
                            CONTACT
                        </NavLink>
                    </li>  
                </ul>
                
                <Link exact to="/menu"  >
                    <img src={menu} className="pop_link"alt="" />
                </Link>
               
            </nav>
        </section>
    );
}

export default Navigation;

// dynamisch:
// Link: normaler Link
// NavLink: .active{color: purple}