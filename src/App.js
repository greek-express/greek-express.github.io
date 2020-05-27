import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="border-container top">
                <div className="greek-border"></div>
            </div>

            <div className="header-bg"></div>

            <img src={logo} alt="logo" className="logo" />

            <div className="container">
                <div className="notice">
                    <p>
                        Site is Under Construction!
                        <br />
                        Order by phone at (425) 747-7434
                        <br />
                        or online using our partner :
                    </p>
                </div>
                <div className="delivery-badge"></div>
                <div className="delivery-badge">
                    <a href="https://www.beyondmenu.com/34359/bellevue/greek-express-bellevue-98006.aspx?utm_source=satellite&utm_medium=top_banner&pk_vid=8ddc5f92185db73e1590601839b21925">
                        <img
                            src="https://static.beyondmenu.com/beyondmenu/images/home/logo.png"
                            alt="beyond menu"
                        />
                    </a>
                </div>
                <div className="delivery-badge"></div>
            </div>

            <div className="border-container bottom">
                <div className="greek-border"></div>
            </div>
        </div>
    );
}

export default App;
