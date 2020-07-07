import React, { Fragment } from 'react';
import ReactGA from 'react-ga';

import SectionHeader from './components/SectionHeader';
import SectionMenu from './components/SectionMenu';

import './App.css';

ReactGA.initialize('UA-169178150-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <Fragment>
            <SectionHeader />
            <SectionMenu />
        </Fragment>
    );
}

export default App;
