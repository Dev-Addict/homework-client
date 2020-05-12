import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./Header";
import '../style/components/App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
