import React from 'react';
import Border from '../Border';

const Heading = (props) => {
    return (
        <div className="heading u-margin-top-medium u-margin-bottom-medium">
            <Border set="left" />
            <h2>
                {props.children}
                <div className="heading-border"></div>
            </h2>
            <Border set="right" />
        </div>
    );
};

export default Heading;
