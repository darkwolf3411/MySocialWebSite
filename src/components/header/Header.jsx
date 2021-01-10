import React from 'react'
import Style from './Header.module.css'
import Logo from './HeLogo/Logo';
import Menu from './HeMenu/Menu';
import SearchContainer from './HeSearch/SearchContainer';

const Header = (props) => {
    return (
        <div className={Style.headerWrapper}>
            <div className={Style.header}>
                <Logo />
                <SearchContainer />
                <Menu />      
            </div>
        </div>
    )
}

export default Header;