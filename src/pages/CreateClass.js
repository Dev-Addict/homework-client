import React from "react";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';

import ClassForm , {formFields} from "../components/ClassForm";
import {createClassAndSave} from "../actions";
import history from "../history";

const CreateGrade = props => {
    const {grade} = useParams();
    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    const onSubmit = formValues => {
        props.createClassAndSave(grade, {
            name: formValues[formFields.name] || undefined
        });
    };

    return (
        <ClassForm onSubmit={(onSubmit)} rote={props.auth.data.user.rote} initialValues={{}} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {createClassAndSave})(CreateGrade);