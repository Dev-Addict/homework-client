import React from "react";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';

import GradeForm, {formFields} from "../components/GradeForm";
import {createGradeAndSave} from "../actions";
import history from "../history";

const CreateGrade = props => {
    const {school} = useParams();
    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    const onSubmit = formValues => {
        props.createGradeAndSave(school, {
            name: formValues[formFields.name] || undefined
        });
    };

    return (
        <GradeForm onSubmit={(onSubmit)} rote={props.auth.data.user.rote} initialValues={{}} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {createGradeAndSave})(CreateGrade);