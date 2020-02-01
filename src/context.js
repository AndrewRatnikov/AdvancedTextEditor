// Core
import React, { createContext, useReducer } from 'react';

export const DataContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'addText': // move to constants.js
            return { ...state, data: action.payload };
        default: 
            return { ...state };
    }
}

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { data: [] });

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}