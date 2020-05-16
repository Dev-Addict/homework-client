import {GET_CLASSES, CREATE_CLASS, UPDATE_CLASS, DELETE_CLASS} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_CLASSES) {
        return action.payload;
    } else if (action.type === CREATE_CLASS) {
        return [...state, action.payload];
    } else if (action.type === UPDATE_CLASS) {
        return [...state.filter(classData => classData._id === action.payload._id), action.payload];
    } else if (action.type === DELETE_CLASS) {
        return state.filter(classData => classData._id !== action.payload);
    }
    return state;
};