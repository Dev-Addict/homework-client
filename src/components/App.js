import React from 'react';
import {Router, Switch, Route} from "react-router-dom";

import Footer from "./Footer";
import Loading from "./Loading";
import Header from "./Header";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";
import Dashboard from "../pages/Dashboard";
import CreateSchool from '../pages/CreateSchool';
import EditSchool from "../pages/EditSchool";
import SchoolInfo from '../pages/SchoolInfo';
import CreateGrade from "../pages/CreateGrade";
import EditGrade from "../pages/EditGrade";
import GradeInfo from "../pages/GradeInfo";
import CreateClass from "../pages/CreateClass";
import EditClass from "../pages/EditClass";
import ClassInfo from "../pages/ClassInfo";
import CreateLesson from "../pages/CreateLesson";
import EditLesson from "../pages/EditLesson";
import history from "../history";
import '../style/components/App.css';

const App = () => {
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
                    <Route path="/create/:rote" exact>
                        <CreateUser/>
                    </Route>
                    <Route path="/edit/:id" exact>
                        <EditUser/>
                    </Route>
                    <Route path="/create-school" exact>
                        <CreateSchool/>
                    </Route>
                    <Route path="/edit-school/:id" exact>
                        <EditSchool/>
                    </Route>
                    <Route path="/school/:id" exact>
                        <SchoolInfo/>
                    </Route>
                    <Route path="/create-grade/:school" exact>
                        <CreateGrade/>
                    </Route>
                    <Route path="/edit-grade/:id" exact>
                        <EditGrade/>
                    </Route>
                    <Route path="/grade/:id" exact>
                        <GradeInfo/>
                    </Route>
                    <Route path="/create-class/:grade" exact>
                        <CreateClass/>
                    </Route>
                    <Route path="/edit-class/:id" exact>
                        <EditClass/>
                    </Route>
                    <Route path="/class/:id" exact>
                        <ClassInfo/>
                    </Route>
                    <Route path="/create-lesson/:classId" exact>
                        <CreateLesson/>
                    </Route>
                    <Route path="/edit-lesson/:id" exact>
                        <EditLesson/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
