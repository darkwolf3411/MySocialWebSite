import React from 'react'
import Style from './Preloader.module.css'

const PreLoader = (props) => {
    return(
        <div className={Style.lds_ring}><div></div><div></div><div></div><div></div></div>
    )
}

export default PreLoader
