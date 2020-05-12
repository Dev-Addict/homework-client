import {ERROR} from "../actions/types";

export default (state = '', action) => {
    if (action.type === ERROR) {
        return action.payload.message;
    }
    return '';
};