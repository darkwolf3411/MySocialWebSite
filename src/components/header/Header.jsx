import React from 'react'
import Style from './Header.module.css'
import Logo from './HeLogo/Logo';
import Menu from './HeMenu/Menu';
import SearchContainer from './HeSearch/SearchContainer';

const Header = (props) => {
    debugger
    return (
        <div className={Style.headerWrapper}>
            <div className={Style.header}>
                <Logo />
                <SearchContainer />
                <Menu profileImage={props.profileImage}
                profileName={props.profileName} />
            </div>
        </div>
    )
}

export default Header;