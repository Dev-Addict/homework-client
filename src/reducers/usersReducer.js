import {GET_USERS, CREATE_USER} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_USERS) {
        return action.payload;
    } else if (action.type === CREATE_USER) {
        return [...state, action.payload];
    }
    return state;
};