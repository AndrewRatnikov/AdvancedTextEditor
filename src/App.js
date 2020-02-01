// Core
import React, {useEffect, useContext} from 'react';

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

const App = () => {
    const { dispatch } = useContext(DataContext)

    useEffect(() => {
        getMockText().then(function (result) {
            dispatch(addText(result.split(' ')))
        });
    }, [dispatch]);

    return (
        <div className="App">
            <header>
                <span>Simple Text Editor</span>
            </header>
            <main>
                <ControlPanel />
                <FileZone />
            </main>
        </div>
    );
}

export default App;
