// Core
import React, { useContext } from 'react';
import classNames from 'classnames';

// Styles
import './FileZone.css';

// Context
import { DataContext } from '../context';

const FileZone = ({ onWordClickHandler, wordId }) => {
    const { state } = useContext(DataContext);

    return (
        <div id="file-zone">
            <div id="file">
                {
                    state.data.map(item => (
                        <span
                            key={item.id}
                            className={classNames({
                                'word__active': wordId === item.id,
                                'word__bold': item.bold,
                                'word__italic': item.italic,
                                'word__underline': item.underline
                            })}
                            onClick={onWordClickHandler(item.id)}>
                            {`${item.text} `}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default FileZone;
