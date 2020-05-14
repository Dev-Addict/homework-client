import {GET_USERS, CREATE_USER, UPDATE_USER} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_USERS) {
        return action.payload;
    } else if (action.type === CREATE_USER) {
        return [...state, action.payload];
    } else if (action.type === UPDATE_USER) {
        return [...state.filter(user => user._id === action.payload._id), action.payload];
    }
    return state;
};