import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import '../style/components/ClassForm.css';

const formName = 'CLASS_FORM';

export const formFields = {
    name: 'NAME'
};

const ClassForm = props => {
    return (
        <form className="class-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="class-form-inputs-container">
                <Field name={formFields.name} component={Input} type="text"/>
            </div>
            <div className="class-form-error">{props.err || ''}</div>
            <button type="submit" className="class-form-submit-button">submit</button>
        </form>
    );
};

export default reduxForm({
    form: formName
})(ClassForm);