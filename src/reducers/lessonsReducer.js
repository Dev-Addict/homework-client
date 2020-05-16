import {GET_LESSONS, CREATE_LESSON, UPDATE_LESSON, DELETE_LESSON} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_LESSONS) {
        return action.payload;
    } else if (action.type === CREATE_LESSON) {
        return [...state, action.payload];
    } else if (action.type === UPDATE_LESSON) {
        return [...state.filter(lesson => lesson._id === action.payload._id), action.payload];
    } else if (action.type === DELETE_LESSON) {
        return state.filter(lesson => lesson._id !== action.payload);
    }
    return state;
};