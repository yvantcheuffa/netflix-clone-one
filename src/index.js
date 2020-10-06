import React, {createContext} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from './GlobalStyles';
import 'normalize.css';
import {FirebaseContext} from "./context/firebase";
import {firebase} from "./lib/firebase.prod";

render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
