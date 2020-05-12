import React from 'react';
import {Router, Switch, Route} from "react-router-dom";

import Header from "./Header";
import '../style/components/App.css';
import Home from "../pages/Home";
import Footer from "./Footer";
import SignIn from "../pages/SignIn";
import history from "../history";
import Loading from "./Loading";

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
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
