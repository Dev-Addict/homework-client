import {GET_SCHOOLS, CREATE_SCHOOL, UPDATE_SCHOOL, DELETE_SCHOOL} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_SCHOOLS) {
        return action.payload;
    } else if (action.type === CREATE_SCHOOL) {
        return [...state, action.payload];
    } else if (action.type === UPDATE_SCHOOL) {
        return [...state.filter(school => school._id === action.payload._id), action.payload];
    } else if (action.type === DELETE_SCHOOL) {
        return state.filter(school => school._id !== action.payload);
    }
    return state;
};