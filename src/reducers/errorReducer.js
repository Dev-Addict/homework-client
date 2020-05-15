import {
    ERROR,
    SIGN_OUT,
    SIGN_IN,
    GET_USERS,
    CREATE_USER,
    UPDATE_USER,
    GET_SCHOOLS,
    CREATE_SCHOOL,
    UPDATE_SCHOOL,
    DELETE_SCHOOL
} from "../actions/types";

export default (state = '', action) => {
    if (action.type === ERROR) {
        return action.payload;
    } else if (action.type === SIGN_IN || action.type === SIGN_OUT || action.type === GET_USERS ||
        action.type === CREATE_USER || action.type === UPDATE_USER || action.type === GET_SCHOOLS ||
        action.type === CREATE_SCHOOL || action.type === UPDATE_SCHOOL || action.type === DELETE_SCHOOL) {
        return '';
    }
    return state;
};