import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import '../style/components/HomeworkAnswerForm.css';

const formName = 'HOMEWORK_ANSWER_FORM';

export const formFields = {
    file: 'FILE'
};

const HomeworkAnswerForm = props => {
    return (
        <form className="homework-answer-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="homework-answer-form-inputs-container">
                <Field name={formFields.file} component={Input} type="file" accept="application/pdf"/>
            </div>
            <div className="homework-answer-form-error">{props.err || ''}</div>
            <button type="submit" className="homework-answer-form-submit-button">submit</button>
        </form>
    );
};

export default reduxForm({
    form: formName
})(HomeworkAnswerForm);