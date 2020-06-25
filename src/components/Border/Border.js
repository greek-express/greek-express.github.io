import React from 'react';
import PropTypes from 'prop-types';

const Border = (props) => {
    const { set } = props;

    switch (set) {
        case 'left':
            return <div className="greek-border left"></div>;
        case 'right':
            return <div className="greek-border right"></div>;
        case 'center':
            return <div></div>;
        default:
            return <div></div>;
    }
};

Border.propTypes = {
    set: PropTypes.string.isRequired,
};

export default Border;
