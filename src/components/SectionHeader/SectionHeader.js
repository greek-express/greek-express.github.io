import React from 'react';
import NavBar from '../NavBar';
import logo from '../../logo.png';

function SectionHeader() {
    return (
        <div className="section-header">
            <img src={logo} alt="logo" className="mobile-logo" />
            <NavBar />
            <div className="header-bg"></div>
        </div>
    );
}

export default SectionHeader;
