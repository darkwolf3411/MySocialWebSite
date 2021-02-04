import React from 'react'
import Style from './ProfAva.module.css'

const Ava = (props) => {
    let ImageData = ({})
    let uploadImage =(e)=>{
        ImageData.append("image", e.target.files[0]);
        props.setNewPrfileImage(ImageData)
    }
    return (
        <div className={Style.AvatarWrapper}>
            <img src={props.photos} alt="" className={Style.profImg} />
            {props.profileImage
                ? <div className={Style.butt}>
                    <a type="file" name="" id="" />Изменить</div>
                : <input
                    className={Style.butt}
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={(e)=> {uploadImage(e)}} />}
        </div>
    )
}

export default Ava;