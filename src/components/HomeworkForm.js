import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import '../style/components/HomeworkForm.css';

const formName = 'HOMEWORK_FORM';

export const formFields = {
    description: 'DESCRIPTION',
    startDate: 'START_DATE',
    startTime: 'START_TIME',
    endDate: 'END_DATE',
    endTime: 'END_TIME',
    sendAfter: 'SEND_AFTER'
};

const HomeWorkForm = props => {
    const renderSendAfterInput = ({input, meta,}) => {
        const createLabel = name => name.replace(/_/g, ' ').charAt(0) + name.replace(/_/g, ' ').substr(1).toLowerCase();
        return (
            <div>
                <label className="homework-input-send-after-label">{createLabel(input.name)}</label>
                <input {...input} className="homework-form-input-send-after" type="radio" value={true}/>
                <label htmlFor={'true'}>Yes</label>
                <input {...input} className="homework-form-input-send-after" type="radio" value={false}/>
                <label htmlFor={'false'}>No</label>
                <div
                    className="homework-form-input-send-after-error">{meta.touched && !meta.active ? meta.error : ''}</div>
            </div>
        );
    };

    return (
        <form className="homework-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="homework-form-inputs-container">
                <Field name={formFields.description} component={Input} type="text"/>
                <Field name={formFields.startDate} component={Input} type="date"/>
                <Field name={formFields.startTime} component={Input} type="time"/>
                <Field name={formFields.endDate} component={Input} type="date"/>
                <Field name={formFields.endTime} component={Input} type="time"/>
                <Field name={formFields.sendAfter} component={renderSendAfterInput}/>
            </div>
            <div className="homework-form-error">{props.err || ''}</div>
            <button type="submit" className="homework-form-submit-button">submit</button>
        </form>
    );
};

const validate = formValues => {
    const errors = {};

    if (!formValues[formFields.description]) {
        errors[formFields.description] = `You Must Enter Valid ${formFields.description}.`;
    }

    const calculateDate = dateString => {
        const date = new Date(dateString) || {};

        return date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    };

    let startAt =
        calculateDate(`${formValues[formFields.startDate]}T${formValues[formFields.startTime]}`);

    let endAt =
        calculateDate(`${formValues[formFields.endDate]}T${formValues[formFields.endTime]}`);

    if (!startAt) {
        errors[formFields.startTime] = `You Must Enter Valid ${formFields.startDate} And ${formFields.startTime}.`;
    }

    if (!endAt) {
        errors[formFields.endTime] = `You Must Enter Valid ${formFields.endDate} And ${formFields.endTime}.`;
    }

    if (!formValues[formFields.sendAfter]) {
        errors[formFields.sendAfter] = `You Must Enter Valid ${formFields.sendAfter}.`;
    }

    if (endAt - startAt < 0) {
        errors[formFields.endTime] =
            `${formFields.endTime} And ${formFields.endDate} Must Be Smaller Than ${formFields.startTime} And ${formFields.startDate}`;
    }

    formValues.startAt = startAt;
    formValues.endAt = endAt;

    return errors;
};

export default reduxForm({
    form: formName,
    validate
})(HomeWorkForm);