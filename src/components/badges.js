import React from 'react';
import confLogo from '../images/badges.svg'

class Badges extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div>
                    <img src="" alt="Avatar"></img>
                    <h1>Brandon <br/> Beltran</h1>
                </div>

                <div>
                    <p>Developer</p>
                    <p>@Brandon</p>
                </div>
                
                <di>
                    #platziconf
                </di>
            </div>
        )
    }
}

export default Badges;