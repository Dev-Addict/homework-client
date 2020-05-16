import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import '../style/components/GradeForm.css';

const formName = 'HOMEWORK_FORM';

export const formFields = {
    name: 'NAME',
    startDate: 'START_DATE',
    startTime: 'START_TIME',
    endDate: 'END_DATE',
    endTime: 'END_TIME',
    sendAfter: 'SEND_AFTER'
};

const HomeWorkForm = props => {
    const renderSendAfterInput = ({input, meta,}) => {
        const createLabel = name => name.charAt(0) + name.substr(1).toLowerCase();
        return (
            <div>
                <label className="homework-input-send-after-label">{createLabel(input.name)}</label>
                <input {...input} className="homework-form-input-send-after" type="radio" value={true}/>
                <label htmlFor={true}>Yes</label>
                <input {...input} className="homework-form-input-send-after" type="radio" value={false}/>
                <label htmlFor={true}>No</label>
                <div className="homework-form-input-send-after-error">{meta.touched && !meta.active ? meta.error : ''}</div>
            </div>
        );
    };

    return (
        <form className="homework-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="homework-form-inputs-container">
                <Field name={formFields.name} component={Input} type="text"/>
                <Field name={formFields.startDate} component={Input} type="date"/>
                <Field name={formFields.startTime} component={Input} type="time"/>
                <Field name={formFields.endDate} component={Input} type="date"/>
                <Field name={formFields.endTime} component={Input} type="time"/>
                {renderSendAfterInput}
            </div>
            <div className="homework-form-error">{props.err || ''}</div>
            <button type="submit" className="homework-form-submit-button">submit</button>
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
})(HomeWorkForm);