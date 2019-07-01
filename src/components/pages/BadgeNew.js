import React from 'react';
import NavBar from '../NavBar';
import './styles/BadgeNew.css';
import Badges from '../badges';
import BadgeFrom from '../BadgeForm'
import Logo from '../../images/logo.svg'


class BadgeNew extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Logo} alt=""></img>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badges
                                firstName="Brandon"
                                lastName="Beltran"
                                twitter="thorinnh"
                                jotTitle="Web Developer"
                                avatarUrl="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeFrom />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;