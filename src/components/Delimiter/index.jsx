import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент разделитель
 * @param {number} width - Ширина разделителя.
 * @param {string} color - Цвет разделителя.
 * @param {number} marginTop - Отступ сверху.
 * @param {number} marginBottom - Отступ снизу.
 * @param {number} marginLeft - Отступ слева.
 * @param {number} marginRight - Отступ справа.
 * @return {node}
 */
const Delimiter = ({
    width,
    color,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
}) => (
    <div style={
        {
            borderStyle: 'solid',
            borderColor: color,
            borderWidth: 0,
            borderTopWidth: width,
            width: `calc(100% - ${marginLeft + marginRight}px)`,
            height: 0,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
        }
    }
    />
);

Delimiter.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
};

Delimiter.defaultProps = {
    width: 1,
    color: '#000000',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
};

export default Delimiter;
