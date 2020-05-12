import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import viewStateReducer from "./viewStateReducer";

export default combineReducers({
    err: errorReducer,
    auth: authReducer,
    viewState: viewStateReducer,
    form: formReducer
});