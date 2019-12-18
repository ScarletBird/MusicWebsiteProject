import React from 'react';
import esgotoLogo from './assets/ESGOTO.png'

class TitleHead extends React.Component {
    render() {
        return(
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar navbar-dark bg-dark navbar-expand-lg MainNavbar">
                    <div className="navbar"><a href="#home" className="nav-item nav-link logo-title">ËSGÖTö</a></div>
                    <div className="navbar">
                        <a href="#home" className="navbar-brand logo-title">
                        <img src={esgotoLogo} alt="Esgoto" width="70px" height="70px"/>
                        </a> 
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a href="#home" className="nav-item nav-link">HOME</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#home" className="nav-item nav-link">ÁLBUNS</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#home" className="nav-item nav-link">PODCASTS</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#home" className="nav-item nav-link">ARTISTAS</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#home" className="nav-item nav-link">CONTATO</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default TitleHead;