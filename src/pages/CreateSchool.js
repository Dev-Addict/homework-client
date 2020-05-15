import React from "react";
import {connect} from "react-redux";

import SchoolForm, {formFields} from "../components/SchoolForm";
import {createSchool} from "../actions";
import history from "../history";

const CreateSchool = props => {
    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    const onSubmit = formValues => {
        props.createSchool({
            name: formValues[formFields.name] || undefined
        });
    };

    return (
        <SchoolForm onSubmit={(onSubmit)} rote={props.auth.data.user.rote} initialValues={{}} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {createSchool})(CreateSchool);