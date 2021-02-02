import React from 'react';
import Map from '../Map';

const SectionAbout = () => {
    return (
        <section className="section-about clearfix" id="about">
            <div className="about-container">
                <div className="map-container">
                    <h5>Map</h5>
                    <Map />
                </div>
                <div className="hours-container">
                    <h5>Hours</h5>
                    <div className="text-content u-margin-bottom-small u-margin-top-large">
                        Monday - Saturday <br />
                        10:00am - 8:30pm
                    </div>
                    <div className="text-content">
                        Sunday
                        <br />
                        11:00am - 6:00pm
                    </div>
                </div>
            </div>
            <div className="about-container">
                <div className="badge u-margin-top-small">
                    <a
                        href="https://www.tripadvisor.com/Restaurant_Review-g58349-d5095561-Reviews-Greek_Express-Bellevue_Washington.html"
                        target="blank"
                    >
                        <img
                            src="/img/Website-Badge-Tripadvisor.png"
                            alt="Tripadvisor"
                        />
                    </a>
                </div>
                <div className="badge">
                    <a
                        href="https://www.yelp.com/biz/greek-express-bellevue"
                        target="blank"
                    >
                        <img src="/img/Website-Badge-Yelp.png" alt="Yelp" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;
