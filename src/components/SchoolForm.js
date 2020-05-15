import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import '../style/components/SchoolForm.css';

const formName = 'SCHOOL_FORM';

export const formFields = {
    name: 'NAME'
};

const SchoolForm = props => {
    return (
        <form className="school-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="school-form-inputs-container">
                <Field name={formFields.name} component={Input} type="text"/>
            </div>
            <div className="school-form-error">{props.err || ''}</div>
            <button type="submit" className="school-form-submit-button">submit</button>
        </form>
    );
};

export default reduxForm({
    form: formName
})(SchoolForm);