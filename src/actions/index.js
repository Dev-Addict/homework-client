import {SIGN_IN, SIGN_OUT, ERROR} from "./types";
import homework from "../api/homework";

export const signIn = (username, password) => async dispatch => {
    try {
        const res = await homework.post(
            '/users/signin', {
                username: 'hello',
                password
            }
        );
        dispatch({
            type: SIGN_IN,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: err
        });
    }
};

export const signOut = () => ({
    type: SIGN_OUT
});