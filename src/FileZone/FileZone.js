// Core
import React, { useContext } from 'react';

// Styles
import './FileZone.css';

// Context
import { DataContext } from '../context';

const FileZone = () => {
    const { state: { data } } = useContext(DataContext);

    return (
        <div id="file-zone">
            <div id="file">
                {
                    data.map((item, i) => (
                        <span key={i} className="word">
                            {`${item} `}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default FileZone;
