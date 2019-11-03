import React from 'react';
import esgotoLogo from './assets/ESGOTO.png'

class TitleHead extends React.Component {
    render() {
        return(
            <div className="MainNavbar">
                <div className="navbar"><a href="#home" className="navbar">ËSGÖTö</a></div>
                <div className="navbar"><a href="#home" className="navbarImg">
                    <img src={esgotoLogo} alt="Esgoto" width="70px" height="70px"/>
                </a> </div>
                <div className="navbar">
                    <ul className="navbar">
                        <li className="navbar"><a href="#home" className="navbar">HOME</a></li>
                        <li className="navbar"><a href="#home"className="navbar">ÁLBUNS</a></li>
                        <li className="navbar"><a href="#home" className="navbar">PODCASTS</a></li>
                        <li className="navbar"><a href="#home" className="navbar">ARTISTAS</a></li>
                        <li className="navbar"><a href="#home" className="navbar">CONTATO</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TitleHead;