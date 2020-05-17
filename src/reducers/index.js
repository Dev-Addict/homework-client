import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import viewStateReducer from "./viewStateReducer";
import usersReducer from "./usersReducer";
import schoolsReducer from "./schoolsReducer";
import gradesReducer from "./gradesReducer";
import classesReducer from "./classesReducer";
import lessonsReducer from "./lessonsReducer";
import homeworkReducer from "./homeworkReducer";
import homeworkAnswersReducer from "./homeworkAnswersReducer";

export default combineReducers({
    err: errorReducer,
    auth: authReducer,
    viewState: viewStateReducer,
    users: usersReducer,
    schools: schoolsReducer,
    grades: gradesReducer,
    classes: classesReducer,
    lessons: lessonsReducer,
    homework: homeworkReducer,
    homeworkAnswers: homeworkAnswersReducer,
    form: formReducer
});