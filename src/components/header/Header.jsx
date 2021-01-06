import React from 'react'
import Style from './Header.module.css'
import Logo from './HeLogo/Logo';
import Search from './HeSearch/Search';
import Menu from './HeMenu/Menu';

const Header = (props) => {
    return (
        <div className={Style.headerWrapper}>
            <div className={Style.header}>
                <Logo />
                <Search />
                <Menu />      
            </div>
        </div>
    )
}

export default Header;