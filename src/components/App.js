import React, { Fragment } from 'react';
import ReactGA from 'react-ga';

import SectionHeader from './SectionHeader';
import SectionMenu from './SectionMenu';
import SectionGallery from './SectionGallery';
import SectionAbout from './SectionAbout';
import SectionFooter from './SectionFooter';

import './App.css';
import 'swiper/css/swiper.css';

ReactGA.initialize('UA-169178150-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <Fragment>
            <SectionHeader />
            <SectionMenu />
            <SectionGallery />
            <SectionAbout />
            <SectionFooter />
        </Fragment>
    );
}

export default App;
