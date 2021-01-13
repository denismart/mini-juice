import React from 'react';
import PropTypes from 'prop-types';

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
