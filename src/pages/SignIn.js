import React from "react";
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";

import Input from "../components/Input";
import {signIn} from "../actions";
import history from "../history";
import '../style/pages/SignIn.css';

const formName = 'SIGN_IN';

const formFields = {
    username: 'USERNAME',
    password: 'PASSWORD'
};

const SignIn = (props) => {
    if (props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    const onSubmit = (formValues) => {
        props.signIn(formValues[formFields.username], formValues[formFields.password]);
    };

    return (
        <form className="sign-in-form" onSubmit={props.handleSubmit(onSubmit)}>
            <div className="sign-in-inputs-container">
                <Field name={formFields.username} component={Input} type="text"/>
                <Field name={formFields.password} component={Input} type="password"/>
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
        err: state.err,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {signIn})(formWrapped);