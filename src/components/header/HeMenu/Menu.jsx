import React from 'react'
import Style from './Menu.module.css'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
    state = {
        toggleMenu: false
    }
    subMenuOn = () => {
        this.setState({
            toggleMenu: true
        })
    }
    subMenuOff = () => {
        this.setState({
            toggleMenu: false
        })
    }
    render(){
        return (
            <div onClick={this.subMenuOn} className={Style.menu}>
                <div className={Style.userWrapper}>
                    <img src={this.props.photos} alt="" />
                    <span>Кирилл</span>
                </div>
                {this.state.toggleMenu ? <div className={Style.submenu}>
                    <NavLink to='/Profile' onClick={()=>this.subMenuOff}>Профиль</NavLink>
                    <NavLink to='/Settings' onClick={()=>this.subMenuOff}>Настройки</NavLink>
                    <NavLink to='' onClick={this.subMenuOff}>Выйти</NavLink>
                </div> : null}
            </div>
        )
    }
}

export default Menu;