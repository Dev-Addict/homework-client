import {
    SIGN_IN,
    SIGN_OUT,
    ERROR,
    SET_VIEW_STATE,
    GET_USERS,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    CREATE_SCHOOL
} from "./types";
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

export const getUsers = () => async dispatch => {
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'loading'
    });
    try {
        const res = await homework.get('/users');
        dispatch({
            type: GET_USERS,
            payload: res.data.data.docs
        });
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

export const createUser = (user) => async (dispatch, getState) => {
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'loading'
    });
    try {
        const res = await homework.post('/users', {...user}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_USER,
            payload: res.data.data.doc
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

export const updateUser = (user, id) => async (dispatch, getState) => {
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'loading'
    });
    try {
        const res = await homework.patch(`/users/${id}`, {...user}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: UPDATE_USER,
            payload: res.data.data.doc
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

export const deleteUser = id => async (dispatch, getState) => {
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'loading'
    });
    try {
        await homework.delete(`/users/${id}`, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: DELETE_USER,
            payload: id
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

export const createSchool = school => async (dispatch, getState) => {
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'loading'
    });
    try {
        const res = await homework.post('/schools', {...school}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_SCHOOL,
            payload: res.data.data.doc
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