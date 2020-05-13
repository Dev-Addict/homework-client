import {GET_USERS} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_USERS) {
        return action.payload;
    }
    return state;
};