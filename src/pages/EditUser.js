import React from "react";
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

import UserForm, {formFields} from "../components/UserForm";
import {getUsers} from "../actions";
import history from "../history";

const EditUser = props => {
    const {id} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    if (props.users.length === 0) {
        props.getUsers();
    }

    let user;

    for(let i = 0; i < props.users.length; i++) {
        if (props.users[i]._id === id) {
            user = props.users[i];
            break;
        }
    }

    if (!user) {
        return (<div>User doesn't exists.</div>)
    }

    const onSubmit = formValues => {
        props.updateUser({
            username: formValues[formFields.username],
            password: formValues[formFields.password],
            rote: formValues[formFields.rote],
            manager: formValues[formFields.manager],
            name: formValues[formFields.name]
        });
    };

    const initialValues = {};
    initialValues[formFields.username] = user.username;
    initialValues[formFields.rote] = user.rote;
    initialValues[formFields.manager] = user.manager;
    initialValues[formFields.name] = user.name;

    return (
        <UserForm onSubmit={onSubmit} rote={props.auth.data.user.rote} initialValues={initialValues}/>
    );
};

const mapStateToProps = state => {
    return {
        users: state.users,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {getUsers})(EditUser);