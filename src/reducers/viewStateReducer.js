import {SET_VIEW_STATE} from "../actions/types";

export default (state = 'ready', action) => {
    if (action.type === SET_VIEW_STATE) {
        return action.payload;
    }
    return state;
}