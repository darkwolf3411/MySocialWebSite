import React from 'react'
import Style from './ProfInfo.module.css'

const Info = (props) => {
    return(
        <div className={Style.ProfInfoWrapper}>
                <span className={Style.ProfName}>{props.profile.fullName}</span>
                <span className={Style.ProfStat}>{props.profile.aboutMe}</span>
                <div className={Style.ProfileInfo}>
                    <span className={Style.ProfAgeNam}>Facebook:</span>
                    <span className={Style.ProfAge}>{props.profile.contacts.facebook}</span>
                    <span className={Style.ProfGenderNam}>vk:</span>
                    <span className={Style.ProfGender}>{props.profile.contacts.vk}</span>
                    <span className={Style.ProfMarryNam}>Instagram:</span>
                    <span className={Style.ProfMarry}>{props.profile.contacts.instagram}</span>
                    {/* <span className={Style.ProfStudNam}>Место учебы:</span>
                    <span className={Style.ProfStud}>ОмГПУ</span>
                    <span className={Style.ProfWebSiteNam}>Сайт:</span>
                    <span className={Style.ProfWebSite}>Нету</span> */}
                </div>
            </div>
    )
}

export default Info;