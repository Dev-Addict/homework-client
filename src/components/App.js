import React from 'react';
import {Router, Switch, Route} from "react-router-dom";

import Footer from "./Footer";
import Loading from "./Loading";
import Header from "./Header";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import history from "../history";
import '../style/components/App.css';

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Loading/>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/signin" exact>
                        <SignIn/>
                    </Route>
                    <Route path="/dashboard" exact>
                        <Dashboard/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
