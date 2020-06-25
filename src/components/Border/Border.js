import React from 'react';
import PropTypes from 'prop-types';

const Border = (props) => {
    const { set } = props;

    return <div className={`greek-border ${set}`}></div>;
};

Border.propTypes = {
    set: PropTypes.string.isRequired,
};

export default Border;
