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
    DELETE_CLASS,
    GET_LESSONS,
    CREATE_LESSON,
    UPDATE_LESSON,
    DELETE_LESSON,
    GET_HOMEWORK,
    CREATE_HOMEWORK,
    UPDATE_HOMEWORK,
    DELETE_HOMEWORK
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
        history.goBack();
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
        history.goBack();
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
        history.goBack();
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
        history.goBack();
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
        history.goBack();
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
        history.goBack();
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
        history.goBack();
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
        history.goBack();
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
        history.goBack();
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

export const getClasses = () => async dispatch => {
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
        history.goBack();
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
        history.goBack();
    }, dispatch);
};

export const deleteClass = id => async (dispatch, getState) => {
    await createRequest(async () => {
        await homework.delete(`/classes/${id}`, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: DELETE_CLASS,
            payload: id
        });
        history.goBack();
    }, dispatch);
};

export const createClassAndSave = (gradeId, classData) => async (dispatch, getState) => {
    await createRequest(async () => {
        const gradeRes = await homework.get(`/grades/${gradeId}`);
        const classRes = await homework.post('/classes', {...classData}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_CLASS,
            payload: classRes.data.data.doc
        });
        const grade = gradeRes.data.data.doc;
        grade.classes.push(classRes.data.data.doc._id);
        const res = await homework.patch(`/grades/${gradeId}`, {...grade}, {
            headers: {Authorization: getState().auth.token}
        });
        history.goBack();
        dispatch({
            type: UPDATE_GRADE,
            payload: res.data.data.doc
        });
    }, dispatch)
};

export const getLessons = () => async dispatch => {
    await createRequest(async () => {
        const res = await homework.get('/lessons');
        dispatch({
            type: GET_LESSONS,
            payload: res.data.data.docs
        });
    }, dispatch)
};

export const createLesson = lesson => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.post('/lessons', {...lesson}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_LESSON,
            payload: res.data.data.doc
        });
        history.goBack();
    }, dispatch)
};

export const updateLesson = (lesson, id) => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.patch(`/lessons/${id}`, {...lesson}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: UPDATE_LESSON,
            payload: res.data.data.doc
        });
        history.goBack();
    }, dispatch);
};

export const deleteLesson = id => async (dispatch, getState) => {
    await createRequest(async () => {
        await homework.delete(`/lessons/${id}`, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: DELETE_LESSON,
            payload: id
        });
        history.goBack();
    }, dispatch);
};

export const createLessonAndSave = (classId, lesson) => async (dispatch, getState) => {
    await createRequest(async () => {
        const classRes = await homework.get(`/classes/${classId}`);
        const lessonRes = await homework.post('/lessons', {...lesson}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_LESSON,
            payload: lessonRes.data.data.doc
        });
        const classData = classRes.data.data.doc;
        classData.lessons.push(lessonRes.data.data.doc._id);
        const res = await homework.patch(`/classes/${classId}`, {...classData}, {
            headers: {Authorization: getState().auth.token}
        });
        history.goBack();
        dispatch({
            type: UPDATE_CLASS,
            payload: res.data.data.doc
        });
    }, dispatch);
};

export const getHomework = () => async dispatch => {
    await createRequest(async () => {
        const res = await homework.get('/homework');
        dispatch({
            type: GET_HOMEWORK,
            payload: res.data.data.docs
        });
    }, dispatch)
};

export const createHomework = homeworkData => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.post('/homework', {...homeworkData}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_HOMEWORK,
            payload: res.data.data.doc
        });
        history.goBack();
    }, dispatch)
};

export const updateHomework = (homeworkData, id) => async (dispatch, getState) => {
    await createRequest(async () => {
        const res = await homework.patch(`/homework/${id}`, {...homeworkData}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: UPDATE_HOMEWORK,
            payload: res.data.data.doc
        });
        history.goBack();
    }, dispatch);
};

export const deleteHomework = id => async (dispatch, getState) => {
    await createRequest(async () => {
        await homework.delete(`/homework/${id}`, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: DELETE_LESSON,
            payload: id
        });
        history.goBack();
    }, dispatch);
};

export const createHomeWorkAndSave = (lessonId, homeworkData) => async (dispatch, getState) => {
    await createRequest(async () => {
        const lessonRes = await homework.get(`/lessons/${lessonId}`);
        const homeworkRes = await homework.post('/homework', {...homeworkData}, {
            headers: {Authorization: getState().auth.token}
        });
        dispatch({
            type: CREATE_HOMEWORK,
            payload: homeworkRes.data.data.doc
        });
        const lesson = lessonRes.data.data.doc;
        lesson.homework.push(homeworkRes.data.data.doc._id);
        const res = await homework.patch(`/lessons/${lessonId}`, {...lesson}, {
            headers: {Authorization: getState().auth.token}
        });
        history.goBack();
        dispatch({
            type: UPDATE_LESSON,
            payload: res.data.data.doc
        });
    }, dispatch);
};