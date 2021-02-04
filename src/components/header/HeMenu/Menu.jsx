import React from 'react'
import Style from './Menu.module.css'
import { NavLink } from 'react-router-dom'

// let state = {
//     toggleMenu: false
//  }
//  let subMenuOn = () => {
//      setState({
//          toggleMenu: true
//      })
//  }

// const Menu = (props) => {
//     return (
//         <div onClick={subMenuOn} className={Style.menu}>
//             <div className={Style.userWrapper}>
//                 <img src={props.photos} alt="" />
//                 <span>Кирилл</span>
//             </div>
//             {state.toggleMenu? (<div className={Style.submenu}>
//                 <NavLink to=''>Профиль</NavLink>
//                 <NavLink to=''>Настройки</NavLink>
//                 <NavLink to=''>Выйти</NavLink>
//             </div>) : null}
//         </div>
//     )
// }

// export default Menu;

class Menu extends React.Component {
    state = {
        toggleMenu: false
    }
    subMenuOn = () => {
        this.setState({
            toggleMenu: true
        })
    }
    blurMenu = () => {
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
                {this.state.toggleMenu? (<div onBlur={this.blurMenu} className={Style.submenu}>
                    <NavLink onClick={this.blurMenu} to='/Profile'>Профиль</NavLink>
                    <NavLink to=''>Настройки</NavLink>
                    <NavLink to=''>Выйти</NavLink>
                </div>) : null}
            </div>
        )
    }
}

export default Menu;