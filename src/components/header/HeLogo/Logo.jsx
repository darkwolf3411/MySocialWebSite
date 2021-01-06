import React from 'react'
import Style from './Logo.module.css'
import { NavLink } from 'react-router-dom'


const Logo = (params) => {
    return (
        <div className={Style.logo}>
            <NavLink to='' className={Style.logoWrapper}>
                <div></div>
                <div></div>
                <div></div>
            </NavLink>
        </div>
    )
}

export default Logo;