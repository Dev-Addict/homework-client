import {GET_HOMEWORK_ANSWER, CREATE_HOMEWORK_ANSWER, UPDATE_HOMEWORK_ANSWER, DELETE_HOMEWORK_ANSWER} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_HOMEWORK_ANSWER) {
        return action.payload;
    } else if (action.type === CREATE_HOMEWORK_ANSWER) {
        return [...state, action.payload];
    } else if (action.type === UPDATE_HOMEWORK_ANSWER) {
        return [...state.filter(homeworkAnswer => homeworkAnswer._id === action.payload._id), action.payload];
    } else if (action.type === DELETE_HOMEWORK_ANSWER) {
        return state.filter(homeworkAnswer => homeworkAnswer._id !== action.payload);
    }
    return state;
};