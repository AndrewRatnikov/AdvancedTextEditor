// Core
import React from 'react';

// Styles
import './ControlPanel.css';

const ControlPanel = ({ setFont }) => {
    return (
        <div id="control-panel">
            <div id="format-actions">
                <button className="format-action" type="button" onClick={setFont('bold')}>
                    <b>B</b>
                </button>
                <button className="format-action" type="button" onClick={setFont('italic')}>
                    <i>I</i>
                </button>
                <button className="format-action" type="button" onClick={setFont('underline')}>
                    <u>U</u>
                </button>
            </div>
        </div>
    );
}

export default ControlPanel;
