import React from "react";
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";

import {signIn} from "../actions";
import '../style/pages/SignIn.css';

const formName = 'SIGN_IN';

const formFields = {
    username: 'USERNAME',
    password: 'PASSWORD'
};

const SignIn = (props) => {
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

    const onSubmit = (formValues) => {
        props.signIn(formValues[formFields.username], formValues[formFields.password]);
    };

    return (
        <form className="sign-in-form" onSubmit={props.handleSubmit(onSubmit)}>
            <div className="sign-in-inputs-container">
                <Field name={formFields.username} component={renderInput} type="text"/>
                <Field name={formFields.password} component={renderInput} type="password"/>
            </div>
            <div className="sign-in-error">{props.err}</div>
            <button type="submit" className="sign-in-submit-button">submit</button>
        </form>
    );
};

const validate = formValues => {
    const errors = {};

    if (!formValues[formFields.username]) {
        errors[formFields.username] = `You Must Enter Valid ${formFields.username}.`;
    }

    if (!formValues[formFields.password] ||
        formValues[formFields.password].length < 8 ||
        formValues[formFields.password].length > 100 ) {
        errors[formFields.password] = `You Must Enter Valid ${formFields.password}.`;
    }

    return errors;
};

const formWrapped = reduxForm({
    form: formName,
    validate
})(SignIn);

const mapStateToProps = state => {
    return {
        err: state.err
    };
};

export default connect(mapStateToProps, {signIn})(formWrapped);