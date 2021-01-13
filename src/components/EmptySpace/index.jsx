import React from 'react';
import PropTypes from 'prop-types';

const EmptySpace = ({ height = 1, width = 1 }) => (
    <div style={{ height, width }} />
);

EmptySpace.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

export default EmptySpace;
