import React from 'react';
import PropTypes from 'prop-types';

const Border = (props) => {
    const { set } = props;

    switch (set) {
        case 'left':
            return <div></div>;
        case 'right':
            return <div></div>;
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
