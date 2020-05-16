import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import '../style/components/GradeForm.css';

const formName = 'GRADE_FORM';

export const formFields = {
    name: 'NAME'
};

const GradeForm = props => {
    return (
        <form className="grade-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="grade-form-inputs-container">
                <Field name={formFields.name} component={Input} type="text"/>
            </div>
            <div className="grade-form-error">{props.err || ''}</div>
            <button type="submit" className="grade-form-submit-button">submit</button>
        </form>
    );
};

const validate = formValues => {
    const errors = {};

    if (!formValues[formFields.name]) {
        errors[formFields.name] = `You Must Enter Valid ${formFields.name}.`;
    }

    return errors;
};

export default reduxForm({
    form: formName,
    validate
})(GradeForm);