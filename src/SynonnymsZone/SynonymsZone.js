// Core
import React from 'react';

// Styles
import './SynonymsZone.css';

const SynonymsZone = ({ synonyms, onSynonymClickHandler }) => {
    if (!synonyms.length) {
        return null;
    }

    return (
        <div id="synonyms">
            <p>Synonyms:</p>
            <ul>
                {
                    synonyms.map((synonym, id) => (
                        <li key={id} onClick={onSynonymClickHandler}>
                            {synonym.word}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SynonymsZone;