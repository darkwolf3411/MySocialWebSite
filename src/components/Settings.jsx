import React from 'react'
import Style from './Settings.module.css'

const Settings = (props) => {
    let isChange = (name, value) => {
        props.changeProfileData(name, value)
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
                                value={props.profile.fullName}
                                onChange={(e) => isChange("fullName", e.target.value)} />
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
                                value={!props.profile.contacts.facebook ? "нет"
                                    : props.profile.contacts.facebook}
                                onChange={(e) => isChange("facebook", e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>
                            <input type="text"
                                value={!props.profile.contacts.website ? "нет"
                                    : props.profile.contacts.website} />
                        </td>
                    </tr>
                    <tr>
                        <td>VK</td>
                        <td>
                            <input type="text"
                                value={!props.profile.contacts.vk ? "нет"
                                    : props.profile.contacts.vk} />
                        </td>
                    </tr>
                    <tr>
                        <td>Twitter</td>
                        <td>
                            <input type="text"
                                value={!props.profile.contacts.twitter ? "нет"
                                    : props.profile.contacts.twitter} />
                        </td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td>
                            <input type="text"
                                value={!props.profile.contacts.instagram ? "нет"
                                    : props.profile.contacts.instagram} />
                        </td>
                    </tr>
                    <tr>
                        <td>YouTube</td>
                        <td>
                            <input type="text"
                                value={!props.profile.contacts.youtube ? "нет"
                                    : props.profile.contacts.youtube} />
                        </td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td>
                            <input type="text"
                                value={!props.profile.contacts.github ? "нет"
                                    : props.profile.contacts.github} />
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
                                <input name="job" type="radio" value={true} checked /> да <br />
                                <input name="job" type="radio" value={false} /> нет
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>Сохранить</button>
            </div>
        </div>
    )
}

export default Settings;