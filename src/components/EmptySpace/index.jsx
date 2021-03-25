import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент пустое место
 * @param {number | string} width - Ширина разделителя.
 * @param {number | string} height - Высота разделителя.
 * @return {node}
 */
const EmptySpace = ({ height, width }) => (
    <div style={{ height, width }} />
);

EmptySpace.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

EmptySpace.defaultProps = {
    height: 1,
    width: 1,
};

export default EmptySpace;
