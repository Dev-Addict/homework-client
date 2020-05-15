import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import viewStateReducer from "./viewStateReducer";
import usersReducer from "./usersReducer";
import schoolsReducer from "./schoolsReducer";
import gradesReducer from "./gradesReducer";

export default combineReducers({
    err: errorReducer,
    auth: authReducer,
    viewState: viewStateReducer,
    users: usersReducer,
    schools: schoolsReducer,
    grades: gradesReducer,
    form: formReducer
});