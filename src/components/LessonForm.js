import React, {useLayoutEffect} from "react";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {connect} from 'react-redux';

import Input from "./Input";
import {getUsers} from "../actions";
import '../style/components/LessonForm.css';

const formName = 'LESSON_FORM';

export const formFields = {
    name: 'NAME',
    teacher: 'TEACHER'
};

const LessonForm = props => {
    useLayoutEffect(() => {
        props.getUsers();
    }, []);

    const TeacherSelector = ({input, meta}) => {
        const createLabel = name => name.charAt(0) + name.substr(1).toLowerCase();

        const handleTeachers = props.teachers.map(teacher => (
            <option value={teacher._id} className="lesson-form-select-option">{teacher.name}</option>
        ));

        return (
            <div>
                <label className="lesson-form-input-label">{createLabel(input.name)}</label>
                <select {...input} placeholder={createLabel(input.name)}>
                    <option className="lesson-form-select-option-first" value="">Choose a teacher</option>
                    {handleTeachers}
                </select>
                <div className="lesson-form-input-error">{meta.touched && !meta.active ? meta.error : ''}</div>
            </div>
        );
    };

    return (
        <form className="lesson-form-form" onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="lesson-form-inputs-container">
                <Field name={formFields.name} component={Input} type="text"/>
                <Field name={formFields.teacher} component={TeacherSelector}/>
            </div>
            <div className="lesson-form-error">{props.err || ''}</div>
            <button type="submit" className="lesson-form-submit-button">submit</button>
        </form>
    );
};

const validate = formValues => {
    const errors = {};

    if (!formValues[formFields.name]) {
        errors[formFields.name] = `You Must Enter Valid ${formFields.name}.`;
    }

    if (!formValues[formFields.teacher]) {
        errors[formFields.teacher] = `You Must Enter Valid ${formFields.teacher}.`;
    }

    return errors;
};

const formWrapped = reduxForm({
    form: formName,
    validate
})(LessonForm);

const selector = formValueSelector(formName);

const mapStateToProps = state => {
    const teachers = [];

    state.users.forEach(user => {
        if (user.manager === state.auth.data.user._id && user.rote === 'teacher') {
            teachers.push(user);
        }
    });

    return {
        [formFields.name + 'Value']: selector(state, formFields.name),
        [formFields.teacher + 'Value']: selector(state, formFields.teacher),
        teachers
    }
};

export default connect(mapStateToProps, {getUsers})(formWrapped);