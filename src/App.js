import React, { Fragment } from 'react';
import ReactGA from 'react-ga';

import SectionHeader from './components/SectionHeader';
import SectionMenu from './components/SectionMenu';
import SectionGallery from './components/SectionGallery';
import SectionAbout from './components/SectionAbout';
import SectionFooter from './components/SectionFooter';

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
