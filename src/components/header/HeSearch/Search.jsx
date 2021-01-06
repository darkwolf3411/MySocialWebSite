import React from 'react'
import Style from './Search.module.css'
const Search = (params) => {
    return (
        <div className={Style.serch}>
            <input type="search" placeholder="Search . . ." />
            <div className={Style.serch_stick}></div>
        </div>
    )
}

export default Search;