import React from 'react';
import logo from '../../logo.png';
import NavBar from '../NavBar';

function SectionHeader() {
    return (
        <div className="section-header">
            <NavBar />

            <div className="header-bg"></div>

            <img src={logo} alt="logo" className="greek express logo" />

            <div className="border-container bottom">
                <div className="greek-border"></div>
            </div>
        </div>
    );
}

export default SectionHeader;
