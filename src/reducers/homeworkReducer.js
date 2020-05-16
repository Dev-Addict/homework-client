import {GET_HOMEWORK, CREATE_HOMEWORK, UPDATE_HOMEWORK, DELETE_HOMEWORK} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_HOMEWORK) {
        return action.payload;
    } else if (action.type === CREATE_HOMEWORK) {
        return [...state, action.payload];
    } else if (action.type === UPDATE_HOMEWORK) {
        return [...state.filter(homework => homework._id === action.payload._id), action.payload];
    } else if (action.type === DELETE_HOMEWORK) {
        return state.filter(homework => homework._id !== action.payload);
    }
    return state;
};