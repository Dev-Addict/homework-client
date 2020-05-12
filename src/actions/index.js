import {SIGN_IN, SIGN_OUT, ERROR} from "./types";
import homework from "../api/homework";
import history from "../history";

export const signIn = (username, password) => async dispatch => {
    try {
        const res = await homework.post(
            '/users/signin', {
                username: username,
                password
            }
        );
        dispatch({
            type: SIGN_IN,
            payload: res.data
        });
        history.push('/');
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: err.message
        });
    }
};

export const signOut = () => ({
    type: SIGN_OUT
});