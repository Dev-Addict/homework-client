import {
    SIGN_IN,
    SIGN_OUT,
    ERROR,
    SET_VIEW_STATE,
    GET_USERS,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_SCHOOLS,
    CREATE_SCHOOL,
    UPDATE_SCHOOL,
    DELETE_SCHOOL,
    GET_GRADES,
    CREATE_GRADE,
    UPDATE_GRADE,
    DELETE_GRADE,
    GET_CLASSES,
    CREATE_CLASS,
    UPDATE_CLASS,
    DELETE_CLASS
} from "./types";
import homework from "../api/homework";
import history from "../history";

const createRequest = (fn, dispatch) => {
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'loading'
    });
    fn().catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.message
        });
    });
    dispatch({
        type: SET_VIEW_STATE,
        payload: 'ready'
    });
};

export const signIn = (username, password) => async dispatch => {
    await createRequest(async () => {
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
    }, dispatch);
};

export const signOut = () => ({
    type: SIGN_OUT
});

export const getUsers = () => async dispatch => {
    await createRequest(async () => {
        const res = await homework.get('/users');
        dispatch({
            type: GET_USERS,
            payload: res.data.data.docs
        });
    }, dispatch)
};

export const createUser = (user) => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.post('/users', {...user}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_USER,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch)
};

export const updateUser = (user, id) => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.patch(`/users/${id}`, {...user}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: UPDATE_USER,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch);
};

export const deleteUser = id => async (dispatch, getState) => {
    await createRequest(async () => {
        await homework.delete(`/users/${id}`, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: DELETE_USER,
            payload: id
        });
        history.push('/dashboard');
    }, dispatch);
};

export const getSchools = () => async dispatch => {
    await createRequest(async () => {
        const res = await homework.get('/schools');
        dispatch({
            type: GET_SCHOOLS,
            payload: res.data.data.docs
        });
    }, dispatch)
};

export const createSchool = school => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.post('/schools', {...school}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_SCHOOL,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch)
};

export const updateSchool = (school, id) => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.patch(`/schools/${id}`, {...school}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: UPDATE_SCHOOL,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch);
};

export const deleteSchool = id => async (dispatch, getState) => {
    await createRequest(async () => {
        await homework.delete(`/schools/${id}`, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: DELETE_SCHOOL,
            payload: id
        });
        history.push('/dashboard');
    }, dispatch);
};

export const getGrades = () => async dispatch => {
    await createRequest(async () => {
        const res = await homework.get('/grades');
        dispatch({
            type: GET_GRADES,
            payload: res.data.data.docs
        });
    }, dispatch)
};

export const createGrade = grade => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.post('/grades', {...grade}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_GRADE,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch)
};

export const updateGrade = (grade, id) => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.patch(`/grades/${id}`, {...grade}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: UPDATE_GRADE,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch);
};

export const deleteGrade = id => async (dispatch, getState) => {
    await createRequest(async () => {
        await homework.delete(`/grades/${id}`, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: DELETE_GRADE,
            payload: id
        });
        history.push('/dashboard');
    }, dispatch);
};

export const createGradeAndSave = (schoolId, grade) => async (dispatch, getState) => {
    await createRequest(async () => {
        const schoolRes = await homework.get(`/schools/${schoolId}`);
        const gradeRes = await homework.post('/grades', {...grade}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_GRADE,
            payload: gradeRes.data.data.doc
        });
        const school = schoolRes.data.data.doc;
        school.grades.push(gradeRes.data.data.doc._id);
        const res = await homework.patch(`/schools/${schoolId}`, {...school}, {
            headers: {Authorization: getState().auth.token}
        });
        history.push(`/school/${schoolId}`);
        dispatch({
            type: UPDATE_SCHOOL,
            payload: res.data.data.doc
        });
    }, dispatch)
};

const getClasses = () => async dispatch => {
    await createRequest(async () => {
        const res = await homework.get('/classes');
        dispatch({
            type: GET_CLASSES,
            payload: res.data.data.docs
        });
    }, dispatch)
};

export const createClass = classData => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.post('/classes', {...classData}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_CLASS,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch)
};

export const updateClass = (classData, id) => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.patch(`/classes/${id}`, {...classData}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: UPDATE_CLASS,
            payload: res.data.data.doc
        });
        history.push('/dashboard');
    }, dispatch);
};