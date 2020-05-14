import React from "react";
import {connect} from 'react-redux';

import UserForm, {formFields} from "../components/UserForm";
import {createUser} from "../actions";
import history from "../history";

const CreateUser = props => {
    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    const onSubmit = formValues => {
        props.createUser({
            username: formValues[formFields.username],
            password: formValues[formFields.password],
            rote: formValues[formFields.rote],
            manager: formValues[formFields.manager],
            name: formValues[formFields.name]
        });
    };

    return (
        <UserForm onSubmit={(onSubmit)} rote={props.auth.data.user.rote} initialValues={{}}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, {createUser})(CreateUser);