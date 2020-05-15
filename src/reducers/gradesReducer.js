import {GET_GRADES, CREATE_GRADE, UPDATE_GRADE, DELETE_GRADE} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_GRADES) {
        return action.payload;
    } else if (action.type === CREATE_GRADE) {
        return [...state, action.payload];
    } else if (action.type === UPDATE_GRADE) {
        return [...state.filter(grade => grade._id === action.payload._id), action.payload];
    } else if (action.type === DELETE_GRADE) {
        return state.filter(grade => grade._id !== action.payload);
    }
    return state;
};