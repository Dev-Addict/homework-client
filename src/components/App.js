import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./Header";
import '../style/components/App.css';
import Home from "../pages/Home";
import Footer from "./Footer";
import {signIn} from "../actions";

function App() {
    signIn('AriaMAN', 'test1234')(undefined);
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
