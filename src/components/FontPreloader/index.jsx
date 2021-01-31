import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент для предзагрузки шрифтов, размещать как можно раньше
 * @param {Array} styles - Стили шрифтов.
 * Пример:
 * [
 *     { fontFamily: 'VK_Sans_Display', fontWeight: 400 },
 *     { fontFamily: 'VK_Sans_Display', fontWeight: 500 }
 * ]
 * @return {node}
 */
const FontPreloader = ({ styles }) => {
    const renderDivs = () => styles
        .map((style) => <div style={style} key={JSON.stringify(style)}>.</div>);

    return (
        <div style={{
            width: 0,
            height: 0,
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
        }}
        >
            {renderDivs()}
        </div>
    );
};

FontPreloader.propTypes = {
    styles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FontPreloader;
