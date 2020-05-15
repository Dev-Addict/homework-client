import React from "react";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import SchoolForm, {formFields} from "../components/SchoolForm";
import {getSchools, updateSchool} from "../actions";
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

    if (props.schools.length === 0) {
        props.getSchools();
    }

    let school;

    for (let i = 0; i < props.schools.length; i++) {
        if (props.schools[i]._id === id) {
            school = props.schools[i];
            break;
        }
    }

    if (!school) {
        return (<div>School doesn't exists.</div>)
    }

    const onSubmit = formValues => {
        props.updateSchool({
            name: formValues[formFields.name]
        }, id);
    };

    const initialValues = {};
    initialValues[formFields.name] = school.name;
    return (
        <SchoolForm onSubmit={onSubmit} rote={props.auth.data.user.rote} initialValues={initialValues} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        schools: state.schools,
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {getSchools, updateSchool})(EditSchool);