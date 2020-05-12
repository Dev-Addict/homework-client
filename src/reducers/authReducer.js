import {SIGN_IN, SIGN_OUT} from "../actions/types";

export default (state = {isSigned: false}, action) => {
    if (action.type === SIGN_IN) {
        return {...action.payload, isSigned: true};
    } else if (action.type === SIGN_OUT) {
        return {isSigned: false};
    }
    return state;
};