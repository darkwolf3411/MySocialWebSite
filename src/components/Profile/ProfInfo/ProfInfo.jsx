import React from 'react'
import Style from './ProfInfo.module.css'

class Info extends React.Component {
    state = {
        setEditMode: false,
        setEnabledMoreInfo: false
    }
    activateEditMode = () => {
        this.setState({
            setEditMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            setEditMode: false
        });
    }
    enabledMoreInfo = () => {
        this.setState({
            setEnabledMoreInfo: true
        });
    }
    disabledMoreInfo = () => {
        this.setState({
            setEnabledMoreInfo: false
        });
    }
    submChangeStatus = () => {
        this.deactivateEditMode()
        this.props.updateStatus(this.props.statusValue);
    }
    render() {
        return (
            <div className={Style.ProfInfoWrapper}>
                {(this.state.setEditMode && this.props.reductAccpet === true) &&
                    <div className={Style.RedactWindow}>
                        <input
                            autoFocus
                            type="text"
                            value={this.props.statusValue}
                            onChange={e => this.props.statusChange(e.target.value)} />
                        <button onClick={this.submChangeStatus}
                            className={Style.RedactSurrButt}>Подтвердить</button>
                    </div>
                }
                <span className={Style.ProfName}>{this.props.profile.fullName}</span>
                {this.props.status ?
                    <span onClick={this.activateEditMode} className={Style.ProfStat}>{this.props.status}</span> : this.props.reductAccpet === true ?
                        <span onClick={this.activateEditMode} className={Style.ProfStat}>Нажмите что бы изменить статус</span> : null}
                <table className={Style.iksweb}>
                    <tbody>
                        <tr>
                            <td className={Style.SocialName}>О себе: </td>
                            <td className={Style.SocialData}>{this.props.profile.aboutMe ? this.props.profile.aboutMe
                                : "нет"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>instagram: </td>
                            <td className={Style.SocialData}>{this.props.profile.contacts.instagram ? this.props.profile.contacts.instagram
                                : "нет"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>Facebook: </td>
                            <td className={Style.SocialData}>{this.props.profile.contacts.facebook ? this.props.profile.contacts.facebook
                                : "нет"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>GitHub:</td>
                            <td className={Style.SocialData}>{this.props.profile.contacts.github ? this.props.profile.contacts.github
                                : "нет"}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={Style.InfoButtWrapp}>
                    {!this.state.setEnabledMoreInfo ?
                        <button onClick={this.enabledMoreInfo} className={Style.InfoButt}>Показать еще данные</button> :
                        <button onClick={this.disabledMoreInfo} className={Style.InfoButt}>закрыть</button>}
                </div>
                {this.state.setEnabledMoreInfo ? <table>
                    <tbody>
                        <tr>
                            <td className={Style.SocialName}>vk:</td>
                            <td className={Style.SocialData}>{this.props.profile.contacts.vk ? this.props.profile.contacts.vk
                                : "нет"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>Twitter: </td>
                            <td className={Style.SocialData}>{this.props.profile.contacts.twitter ? this.props.profile.contacts.twitter
                                : "нет"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>website:</td>
                            <td className={Style.SocialData}>{this.props.profile.contacts.website ? this.props.profile.contacts.website
                                : "нет"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>YouTube:</td>
                            <td className={Style.SocialData}>{this.props.profile.contacts.youtube ? this.props.profile.contacts.youtube
                                : "нет"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>В поисках работы: </td>
                            <td className={Style.SocialData}>{this.props.profile.lookingForAJob ? "ищу работу" : "не ищу работу"}</td>
                        </tr>
                        <tr>
                            <td className={Style.SocialName}>Взгляд о работе: </td>
                            <td className={Style.SocialData}>{this.props.profile.lookingForAJobDescription ?
                                this.props.profile.lookingForAJobDescription : "нет"}</td>
                        </tr>
                    </tbody>
                </table> : null}
            </div>
        )
    }
}
export default Info;