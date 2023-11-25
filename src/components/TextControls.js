// TextControls.js

import React from 'react';
// import './TextControls.css';

const TextControls = ({ handleIncreaseTextSize, handleDecreaseTextSize, handleResetTextSize }) => {
    return (
        <div className="text-controls">
            <button onClick={handleIncreaseTextSize}>Povećaj tekst</button>
            <button onClick={handleDecreaseTextSize}>Smanji tekst</button>
            <button onClick={handleResetTextSize}>Vrati na default</button>
        </div>
    );
}

export default TextControls;
