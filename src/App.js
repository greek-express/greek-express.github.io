import React from 'react';
import ReactGA from 'react-ga';
import logo from './logo.png';
import UberEatsLogo from './img/png/Website-Badge-UberEats.png';
import CaviarLogo from './img/png/Website-Badge-Caviar.png';
import './App.css';

ReactGA.initialize('UA-169178150-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <div className="App">
            <div className="border-container top">
                <div className="greek-border"></div>
            </div>

            <div className="header-bg"></div>

            <img src={logo} alt="logo" className="greek express logo" />

            <div className="container">
                <div className="notice">
                    <p>
                        Site is Under Construction!
                        <br />
                        <a
                            href={process.env.PUBLIC_URL + '/pdf/menu.pdf'}
                            target="blank"
                        >
                            DOWNLOAD MENU
                        </a>
                        <br />
                        Order by phone at (425) 747-7434
                        <br />
                        or online using one of our partners:
                    </p>
                </div>
                <div className="delivery-badge">
                    <a
                        href="https://www.doordash.com/business/15274/?utm_source=partner-link&utm_medium=website&utm_campaign=15274&utm_content=red-xl"
                        target="blank"
                    >
                        <img
                            src="https://cdn.doordash.com/media/button/button_red_xl.svg"
                            alt="DoorDash link"
                        />
                    </a>
                </div>
                <div className="delivery-badge">
                    <a
                        href="https://www.ubereats.com/seattle/food-delivery/greek-express/YZmxK7xvQJKNXAJkBybC6g"
                        target="blank"
                    >
                        <img src={UberEatsLogo} alt="Uber Eats link" />
                    </a>
                </div>
                <div className="delivery-badge">
                    <a
                        href="https://www.grubhub.com/restaurant/greek-express-4058-factoria-square-mall-se-ste-h2-bellevue/1008618"
                        target="blank"
                    >
                        <img
                            src="https://learn.grubhub.com/wp-content/uploads/2020/04/WebsiteBadges-2VersionsWebsiteBade-GH-Rectangle-1-300x150.png"
                            alt="GrubHub link"
                        />
                    </a>
                </div>
                <div className="delivery-badge">
                    <a
                        href="https://trycaviar.app.link/EH8hw6jI1Y"
                        target="blank"
                    >
                        <img src={CaviarLogo} alt="Caviar link" />
                    </a>
                </div>
            </div>
            <div className="border-container bottom">
                <div className="greek-border"></div>
            </div>
        </div>
    );
}

export default App;
