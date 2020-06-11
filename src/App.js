import React from 'react';
import ReactGA from 'react-ga';
import logo from './logo.png';
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
                        href="https://www.ubereats.com/seattle/food-delivery/Greek%20Express"
                        target="blank"
                    >
                        <img
                            src="https://public.boxcloud.com/api/2.0/internal_files/642159077010/versions/680904049410/representations/png_paged_2048x2048/content/1.png?access_token=1!sfKnBdAgPmRCmMEInXoeBfmYLcx5jxtqx4AGEX7X1gXXnyDDOtnquPUxlyj65zcx58e6ALPceiKSNZ0-O4mpOXaITYJn04dxYt0PldzmPKf_mlGSqcLtQxhwMI_GxCoAHTop7C4psjSDIevSrDLRw_0-c7XZJ6947uO3jQMULc-QcwWGlctMiIuWJTv8--kUt_MZAwKc_jfSPTzbgGKgSP3RSphvnkhCwABX_S6N_waJ3Xpu_miS-CExo_KSLnhIN9PXzIw3gAPRxFSOSGOV9shITvZhC3FTl-9dXzStBAF9-nME0xO2xSionZXkAWqGJjF2i9NExwDlgVEEUBYa1vLXLFQueTCSWXm88IKVWRSTOrKPS0twWAOWAdEp1H_MatBVOkVGWBhn-fBp4Buyo2BetXRhMTTsdgxNX0x_UI554KFPwMr8if0LCsttiPDVpLfiEwV_tUAcdfJ0OHYiFIRtu_GXpRD8xBPaTUZ2HTGsAUh8Q4Gkx7VHxe9W2_5i_CgOKArMqsOSXI5Lgqj8GTH-L_7VwPon--iV9t8APvVy9ehIDp3LM3IT6AFFE9dox3aSU2QSPdgjlymNSL9ueAAAKdrleYMt5c8TyEs6Io-0Xf7XQ2xHnZ0EGofaL5zzu-A_irLb&shared_link=https%3A%2F%2Fuber.app.box.com%2Fs%2F9ro2t75twe2mut85ufpmznub6nb1efuy&box_client_name=box-content-preview&box_client_version=2.43.0"
                            alt="DoorDash link"
                        />
                    </a>
                </div>
                <div className="delivery-badge">
                    <a
                        href="https://www.grubhub.com/restaurant/greek-express-4058-factoria-square-mall-se-ste-h2-bellevue/1008618"
                        target="blank"
                    >
                        <img
                            src="https://learn.grubhub.com/wp-content/uploads/2020/04/WebsiteBadges-2VersionsWebsiteBade-GH-Rectangle-1-300x150.png"
                            alt="DoorDash link"
                        />
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
