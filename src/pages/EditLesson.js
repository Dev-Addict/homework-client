import React from "react";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import LessonForm, {formFields} from "../components/LessonForm";
import {getLessons, updateLesson} from "../actions";
import history from "../history";

const EditLesson = props => {
    const {id} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    if (props.lessons.length === 0) {
        props.getLessons();
    }

    let lesson;

    for (let i = 0; i < props.lessons.length; i++) {
        if (props.lessons[i]._id === id) {
            lesson = props.lessons[i];
            break;
        }
    }

    if (!lesson) {
        return (<div>School doesn't exists.</div>)
    }

    const onSubmit = formValues => {
        props.updateLesson({
            name: formValues[formFields.name],
            teacher: formValues[formFields.teacher]
        }, id);
    };

    const initialValues = {};
    initialValues[formFields.name] = lesson.name;
    initialValues[formFields.teacher] = lesson.teacher;

    return (
        <LessonForm onSubmit={onSubmit} rote={props.auth.data.user.rote} initialValues={initialValues} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        lessons: state.lessons,
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {getLessons, updateLesson})(EditLesson);