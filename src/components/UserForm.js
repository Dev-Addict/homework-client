import React from "react";
import {Field, reduxForm} from "redux-form";

import '../style/components/UserForm.css';

const formName = 'USER_FORM';

export const formFields = {
    username: 'USERNAME',
    password: 'PASSWORD',
    rote: 'ROTE',
    manager: 'MANAGER',
    name: 'NAME'
};

const UserForm = props => {
    const createLabel = name => name.charAt(0) + name.substr(1).toLowerCase();

    const renderInput = ({input, meta, type}) => {
        return (
            <div>
                <label className="sign-in-input-label">{createLabel(input.name)}</label>
                <input {...input} className="sign-in-input" placeholder={createLabel(input.name)} type={type}/>
                <div className="sign-in-input-error">{meta.touched && !meta.active ? meta.error : ''}</div>
            </div>
        );
    };

    return (
        <form className="user-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="user-form-inputs-container">
                <Field name={formFields.name} component={renderInput} type="text"/>
                <Field name={formFields.username} component={renderInput} type="text"/>
                <Field name={formFields.manager} component={renderInput} type="text"/>
                <Field name={formFields.rote} component={renderInput} type="text"/>
                <Field name={formFields.password} component={renderInput} type="password"/>
            </div>
            <button type="submit" className="user-form-submit-button">submit</button>
        </form>
    );
};

export default reduxForm({
    form: formName
})(UserForm);