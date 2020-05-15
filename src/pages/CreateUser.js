import React from "react";
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

import UserForm, {formFields} from "../components/UserForm";
import {createUser} from "../actions";
import history from "../history";

const CreateUser = props => {
    const {rote} = useParams();
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
            username: formValues[formFields.username] || undefined,
            password: formValues[formFields.password] || undefined,
            rote: rote,
            name: formValues[formFields.name] || undefined
        });
    };

    return (
        <UserForm onSubmit={(onSubmit)} rote={props.auth.data.user.rote} initialValues={{}} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {createUser})(CreateUser);