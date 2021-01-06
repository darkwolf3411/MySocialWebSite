import React from 'react'
import Style from './Menu.module.css'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {

    let subMenu = React.createRef();

    let subMenuOn = () => {
        
        subMenu.current.classList.toggle("submenuOn");
    }

    return (
        <div onClick={subMenuOn} className={Style.menu}>
            <div className={Style.userWrapper}>
                <img src="https://is.gd/GsAItc" alt="" />
                <span>Кирилл</span>
            </div>
            <div ref={subMenu} className={Style.submenu}>
                <NavLink to=''>Профиль</NavLink>
                <NavLink to=''>Настройки</NavLink>
                <NavLink to=''>Выйти</NavLink>
            </div>
        </div>
    )
}

export default Menu;