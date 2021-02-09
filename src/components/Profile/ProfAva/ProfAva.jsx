import React from 'react'
import Style from './ProfAva.module.css'

const Ava = (props) => {
    return (
        <div className={Style.AvatarWrapper}>
            <img src={props.photos} alt="" className={Style.profImg} />
            {!props.reductAccpet ?
                <div className={Style.Button}>
                    {props.isFollow ?
                        <button className={Style.UnFollowedButton} onClick={() => {
                                props.unfollowTC(props.userID)
                            }}>Удалить из друзей</button> :
                        <button className={Style.FollowedButton} onClick={() => {
                                props.followTC(props.userID)
                            }}>Добавить в друзья</button>}
                </div>
                : props.profileImage
                    ? <div className={Style.butt}>
                        <a type="file" name="" id="" />Изменить</div>
                    : <input
                        className={Style.butt}
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg" />}
        </div>
    )
}

export default Ava;