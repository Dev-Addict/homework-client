import {SIGN_IN, SIGN_OUT, ERROR, SET_VIEW_STATE} from "./types";
import homework from "../api/homework";
import history from "../history";

export const signIn = (username, password) => async dispatch => {
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'loading'
    });
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
        history.push('/dashboard');
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: err.response.data.message
        });
    }
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'ready'
    });
};

export const signOut = () => ({
    type: SIGN_OUT
});