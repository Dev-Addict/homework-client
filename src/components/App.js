import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./Header";
import '../style/components/App.css';
import Home from "../pages/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
