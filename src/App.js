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
                            src="https://public.boxcloud.com/api/2.0/internal_files/642159077010/versions/680904049410/representations/png_paged_2048x2048/content/1.png?access_token=1!GcTtE9eMiSPgjZKb8rb-_ClGwVA4FlMBX887CITJvQlzjIuNeME20EOTnOMI0GOGi5etJlp8awYt6bgaej-ONWjwXVD63oyRHw6PC7tY3XfCVn2EMMQMFZvB4xvIB1zH6_F2JTgjVtl1pmzLUM8jexncEdejZVn4Ry4tGkjEy4-NgOLZO8f9i77lbASCQIMEN5LTX7DB-NuKiiJ64zNyqamMl003L-BuW2jrRMrsCOXq37CUu0cTFSGKW5Ln1jBdzTmvIrw5Jm2k2ij5uwE663G5ag-lylOq73wMX_xfpwFakwbniK20CBCHnHLhxVTv3QqwoRqLFj2BqnzmzwMjgoWMtxg73MPwYZllaetEhpzYEew_vwLwN1rr924lr5PYavKlGtHmNUAW2QXNYoqjwOHnzv3WERM1QLqUBfKr3eVBoxo35pZDebcv0CuGH0LOBqGQT58G9NDr1-qgvyBbzFaAMA74JYuGHwaGokLpOKWwpDqiKigfwMlkQ0uw2my8Q7OxdRX_N1Rb-NDAPrhJ8N28vM1xdO-XGTr3gMWA0W3aYl-Gu4qewLKKRHaFIPeJadF2uMN_fvDt_UHPA3xRh7UvCwJrh5E83S0yaZnJ3sexzCD1N66b2Ob4CLHNNwqSiw6pgE8m&shared_link=https%3A%2F%2Fuber.app.box.com%2Fs%2F9ro2t75twe2mut85ufpmznub6nb1efuy&box_client_name=box-content-preview&box_client_version=2.43.0"
                            alt="Uber Eats link"
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
                            alt="GrubHub link"
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
