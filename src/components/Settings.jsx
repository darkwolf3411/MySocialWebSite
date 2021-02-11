import React from 'react'
import { Redirect } from 'react-router-dom'
import Style from './Settings.module.css'

const Settings = (props) => {
    debugger
    let isChange = (key, value, name) => {
        props.changeProfileData(key, value, name)
    }
    let isChanged = () => {
        props.updateUsersSettings(props.profile)
    }
    return (
        <div className={Style.SettingsWrapper}>
            <div>
                <span>Общее</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Имя</td>
                        <td>
                            <input required
                                placeholder="Ваше имя"
                                type="text"
                                value={props.profile.fullName ? props.profile.fullName : null}
                                onChange={(e) => isChange("fullName", e.target.value, "profile")} />
                        </td>
                    </tr>
                    <tr>
                        <td>О себе</td>
                        <td>
                            <input required
                                type="text"
                                value={props.profile.aboutMe ? props.profile.aboutMe : null}
                                onChange={(e) => isChange("aboutMe", e.target.value, "profile")} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <span>Контакты</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Facebook</td>
                        <td>
                            <input type="text"
                                value={props.profile.contacts.facebook ? props.profile.contacts.facebook : null}
                                onChange={(e) => isChange("facebook", e.target.value, "contacts")} />
                        </td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>
                            <input type="text"
                                value={props.profile.contacts.website ? props.profile.contacts.website : null}
                                onChange={(e) => isChange("website", e.target.value, "contacts")} />
                        </td>
                    </tr>
                    <tr>
                        <td>VK</td>
                        <td>
                            <input type="text"
                                value={props.profile.contacts.vk ? props.profile.contacts.vk : null}
                                onChange={(e) => isChange("vk", e.target.value, "contacts")} />
                        </td>
                    </tr>
                    <tr>
                        <td>Twitter</td>
                        <td>
                            <input type="text"
                                value={props.profile.contacts.twitter ? props.profile.contacts.twitter : null}
                                onChange={(e) => isChange("twitter", e.target.value, "contacts")} />
                        </td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td>
                            <input type="text"
                                value={props.profile.contacts.instagram ? props.profile.contacts.instagram : null}
                                onChange={(e) => isChange("instagram", e.target.value, "contacts")} />
                        </td>
                    </tr>
                    <tr>
                        <td>YouTube</td>
                        <td>
                            <input type="text"
                                value={props.profile.contacts.youtube ? props.profile.contacts.youtube : null}
                                onChange={(e) => isChange("youtube", e.target.value, "contacts")} />
                        </td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td>
                            <input type="text"
                                value={props.profile.contacts.github ? props.profile.contacts.github : null}
                                onChange={(e) => isChange("github", e.target.value, "contacts")} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <span>О работе</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Ищу работу</td>
                        <td>
                            <div>
                                <input onClick={(e) => props.setLookingForJob(e.target.value)} name="job" type="radio" value={true} /> да <br />
                                <input onClick={(e) => props.setLookingForJob(e.target.value)} name="job" type="radio" value={false} /> нет
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Взгляд о работе</td>
                        <td>
                            <input type="text"
                                value={props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : null}
                                onChange={(e) => isChange("lookingForAJobDescription", e.target.value, "profile")} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={isChanged}>Сохранить</button>
            </div>
        </div>
    )
}

export default Settings;