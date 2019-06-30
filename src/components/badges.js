import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badges.svg'


class Badges extends React.Component {
    render () {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60" alt="Avatar"></img>
                    <h1>{ this.props.firstName }<br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@Brandon</div>
                </div>
                
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badges;