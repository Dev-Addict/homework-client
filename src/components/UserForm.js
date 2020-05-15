import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import '../style/components/UserForm.css';

const formName = 'USER_FORM';

export const formFields = {
    username: 'USERNAME',
    password: 'PASSWORD',
    rote: 'ROTE',
    name: 'NAME'
};

const UserForm = props => {

    return (
        <form className="user-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="user-form-inputs-container">
                <Field name={formFields.name} component={Input} type="text"/>
                <Field name={formFields.username} component={Input} type="text"/>
                <Field name={formFields.password} component={Input} type="password"/>
            </div>
            <div className="user-form-error">{props.err || ''}</div>
            <button type="submit" className="user-form-submit-button">submit</button>
        </form>
    );
};

export default reduxForm({
    form: formName
})(UserForm);