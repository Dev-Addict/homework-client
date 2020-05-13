import React from "react";
import {connect} from 'react-redux';

import UserForm, {formFields} from "../components/UserForm";
import {createUser} from "../actions";

const CreateUser = props => {
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
        <UserForm onSubmit={(onSubmit)}/>
    );
};

export default connect(null, {createUser})(CreateUser)