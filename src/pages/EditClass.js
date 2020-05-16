import React from "react";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import ClassForm , {formFields} from "../components/ClassForm";
import {getClasses, updateClass} from "../actions";
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

    if (props.classes.length === 0) {
        props.getClasses();
    }

    let classData;

    for (let i = 0; i < props.classes.length; i++) {
        if (props.classes[i]._id === id) {
            classData = props.classes[i];
            break;
        }
    }

    if (!classData) {
        return (<div>Class doesn't exists.</div>)
    }

    const onSubmit = formValues => {
        props.updateClass({
            name: formValues[formFields.name]
        }, id);
    };

    const initialValues = {};
    initialValues[formFields.name] = classData.name;
    return (
        <ClassForm onSubmit={onSubmit} rote={props.auth.data.user.rote} initialValues={initialValues} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        classes: state.classes,
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {getClasses, updateClass})(EditSchool);