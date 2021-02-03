import React, { Fragment } from 'react';

import SectionHeader from '../components/SectionHeader';
import SectionMenu from '../components/SectionMenu';
import SectionGallery from '../components/SectionGallery';
import SectionAbout from '../components/SectionAbout';
import SectionFooter from '../components/SectionFooter';

import './App.css';
import './index.css';
import 'swiper/css/swiper.css';

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
