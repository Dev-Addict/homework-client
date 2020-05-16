import React from "react";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import GradeForm, {formFields} from "../components/GradeForm";
import {getGrades, updateGrade} from "../actions";
import history from "../history";

const EditSchool = props => {
    const {id} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    if (props.grades.length === 0) {
        props.getGrades();
    }

    let grade;

    for (let i = 0; i < props.grades.length; i++) {
        if (props.grades[i]._id === id) {
            grade = props.grades[i];
            break;
        }
    }

    if (!grade) {
        return (<div>School doesn't exists.</div>)
    }

    const onSubmit = formValues => {
        props.updateGrade({
            name: formValues[formFields.name]
        }, id);
    };

    const initialValues = {};
    initialValues[formFields.name] = grade.name;
    return (
        <GradeForm onSubmit={onSubmit} rote={props.auth.data.user.rote} initialValues={initialValues} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        grades: state.grades,
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {getGrades, updateGrade})(EditSchool);