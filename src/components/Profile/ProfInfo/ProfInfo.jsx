import React from 'react'
import Style from './ProfInfo.module.css'

const Info = (props) => {
    return(
        <div className={Style.ProfInfoWrapper}>
                <span className={Style.ProfName}>Верниковский Кирилл</span>
                <span className={Style.ProfStat}>так за когоже болеть на этой земле кого любить</span>
                <div className={Style.ProfileInfo}>
                    <span className={Style.ProfAgeNam}>Возраст:</span>
                    <span className={Style.ProfAge}>20 лет</span>
                    <span className={Style.ProfGenderNam}>Пол:</span>
                    <span className={Style.ProfGender}>Мужской</span>
                    <span className={Style.ProfMarryNam}>Семейное положение:</span>
                    <span className={Style.ProfMarry}>Не женат</span>
                    <span className={Style.ProfStudNam}>Место учебы:</span>
                    <span className={Style.ProfStud}>ОмГПУ</span>
                    <span className={Style.ProfWebSiteNam}>Сайт:</span>
                    <span className={Style.ProfWebSite}>Нету</span>
                </div>
            </div>
    )
}

export default Info;