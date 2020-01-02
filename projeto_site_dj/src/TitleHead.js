import React from 'react';
import esgotoLogo from './assets/ESGOTO.png'

class TitleHead extends React.Component {
    render() {
        return(
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark parentBar">
                <a href="#home" className="navbar-brand logo-title">ËSGÖTö</a>
                <a href="#home" className="navbar-item logo-title logo">
                    <img src={esgotoLogo} className="logo" alt="Esgoto" width="70px" height="70px"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a href="#home" className="nav-item nav-link">HOME</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#home" className="nav-item nav-link">ÁLBUNS</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#home" className="nav-item nav-link">PODCASTS</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#home" className="nav-item nav-link">ARTISTAS</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#home" className="nav-item nav-link">CONTATO</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TitleHead;