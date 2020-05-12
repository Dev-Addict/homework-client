import {ERROR, SIGN_OUT, SIGN_IN} from "../actions/types";

export default (state = '', action) => {
    if (action.type === ERROR) {
        return action.payload;
    } else if (action.type === SIGN_IN) {
        return '';
    } else if (action.type === SIGN_OUT) {
        return '';
    }
    return state;
};