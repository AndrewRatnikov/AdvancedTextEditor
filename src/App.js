// Core
import React, {useEffect, useContext, useCallback, useState} from 'react';

// Styles
import './App.css';

// Context
import { DataContext } from './context';

// Action
import { addText } from './actions'

// Components
import ControlPanel from "./ControlPanel/ControlPanel";
import FileZone from "./FileZone/FileZone";

// Mocks
import getMockText from './text.service';
import SynonymsZone from './SynonnymsZone/SynonymsZone';

const App = () => {
    const { state, dispatch } = useContext(DataContext);
    const [wordId, setWordId] = useState();
    const [synonyms, setSynonyms] = useState([])

    useEffect(() => {
        getMockText().then(function (result) {
            dispatch(
                addText(
                    result.split(' ').map((item, i) => ({
                        id: i,
                        text: item,
                        bold: false,
                        italic: false,
                        underline: false
                    }))
                )
            );
        });
    }, [dispatch]);

    const getSynonyms = useCallback(text => {
        fetch(`https://api.datamuse.com/words?rel_syn=${text}`)
        .then(response => response.json())
        .then(json =>setSynonyms(json));
    }, []);

    const onWordClickHandler = useCallback(id => e => {
        getSynonyms(e.target.innerText.trim())
        setWordId(id)
    }, []);

    const setFont = useCallback(font => () => {
        const index = state.data.findIndex(item => item.id === wordId);
        const newData = [...state.data];
        newData[index][font] = !newData[index][font];
        dispatch(addText(newData));
    }, [wordId]);

    const onSynonymClickHandler = useCallback(e => {
        replaceSynonym(e.target.innerText)
    }, [wordId]);

    const replaceSynonym = useCallback(synonym => {
        const index = state.data.findIndex(item => item.id === wordId);
        console.log(wordId, index)
        const newData = [...state.data];
        newData[index].text = synonym;
        dispatch(addText(newData));
    }, [wordId]);

    return (
        <div className="App">
            <header>
                <span>Simple Text Editor</span>
            </header>
            <main>
                <ControlPanel setFont={setFont} />
                <FileZone
                    onWordClickHandler={onWordClickHandler}
                    wordId={wordId} />
                <SynonymsZone synonyms={synonyms} onSynonymClickHandler={onSynonymClickHandler} />
            </main>
        </div>
    );
}

export default App;
