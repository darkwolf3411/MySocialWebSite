import React from 'react'
import Style from './ProfAva.module.css'

const Ava = (props) => {
    return(
        <div className={Style.AvatarWrapper}>
                <img src={props.photos} alt="" className={Style.profImg} />
                <a href="" className={Style.butt}>Редактировать</a>
            </div>
    )
}

export default Ava;