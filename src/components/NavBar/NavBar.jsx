import React from 'react'
import Style from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className={Style.NavWrapper}>
            <NavLink to='/Profile'>
                <img src="https://is.gd/koR9qU" alt="" />
            </NavLink>
            <NavLink to='/Messages'>
                <img src="https://is.gd/WvkQpj" alt="" />
            </NavLink>
            <NavLink to='/Users'>
                <img src="https://is.gd/9wzIdd" alt="" />
            </NavLink>
        </div>
    )
}

export default NavBar;