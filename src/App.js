import React from 'react';
import ReactGA from 'react-ga';

import SectionHeader from './components/SectionHeader';

import './App.css';

ReactGA.initialize('UA-169178150-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return <SectionHeader />;
}

export default App;
