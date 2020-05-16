import React from "react";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';

import HomeworkForm, {formFields} from "../components/HomeworkForm";
import {createHomeWorkAndSave} from "../actions";
import history from "../history";

const CreateHomework = props => {
    const {lesson} = useParams();
    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    const onSubmit = formValues => {
        props.createHomeworkAndSave(lesson, {
            name: formValues[formFields.name] || undefined,
            teacher: formValues[formFields.teacher] || undefined
        });
    };

    return (
        <HomeworkForm onSubmit={(onSubmit)} rote={props.auth.data.user.rote} initialValues={{}} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {createHomeWorkAndSave})(CreateHomework);