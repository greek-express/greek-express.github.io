import React from 'react';
import Border from '../Border';

const Heading = (props) => {
    return (
        <div className="heading u-margin-top-medium u-margin-bottom-small">
            <Border set="left" />
            <div className="heading-container">
                <h2>
                    {props.children}
                    <div className="heading-border"></div>
                </h2>
            </div>
            <Border set="right" />
        </div>
    );
};

export default Heading;
