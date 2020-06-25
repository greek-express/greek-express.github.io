import React from 'react';
import logo from '../../logo.png';

function SectionHeader() {
    return (
        <div className="section-header">
            <div className="border-container top">
                <div className="greek-border left"></div>
                <div className="spacer"></div>
                <div className="greek-border right"></div>
            </div>

            <div className="header-bg"></div>

            <img src={logo} alt="logo" className="greek express logo" />

            <div className="border-container bottom">
                <div className="greek-border"></div>
            </div>
        </div>
    );
}

export default SectionHeader;
