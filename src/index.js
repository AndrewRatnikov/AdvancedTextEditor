// Core
import React from 'react';
import ReactDOM from 'react-dom';

// styles
import './index.css';

// Components
import { DataProvider } from './context'
import App from './App';

ReactDOM.render(
    <DataProvider>
        <App />
    </DataProvider>, 
    document.getElementById('root')
);
