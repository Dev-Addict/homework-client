import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
    err: errorReducer,
    auth: authReducer,
    form: formReducer
});