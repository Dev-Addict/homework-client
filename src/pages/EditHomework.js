import React from "react";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import HomeworkForm, {formFields} from "../components/HomeworkForm";
import {getHomework, updateHomework} from "../actions";
import history from "../history";

const EditSchool = props => {
    const {id} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    if (props.homework.length === 0) {
        props.getHomework();
    }

    let homework;

    for (let i = 0; i < props.homework.length; i++) {
        if (props.homework[i]._id === id) {
            homework = props.homework[i];
            break;
        }
    }

    if (!homework) {
        return (<div>Homework doesn't exists.</div>)
    }

    const onSubmit = formValues => {
        props.updateGrade({
            description: formValues[formFields.description] || undefined,
            startAt: formValues.startAt,
            endAt: formValues.endAt,
            sendAfter: formValues[formFields.sendAfter],
            teacher: props.auth.data.user._id
        }, id);
    };

    const getFull = num => {
        if (num < 10) {
            return `0${num}`;
        }
        return num;
    };

    const initialValues = {};
    const start = new Date(homework.startAt + new Date().getTimezoneOffset() * -60 * 1000);
    const end = new Date(homework.startAt + new Date().getTimezoneOffset() * -60 * 1000);
    initialValues[formFields.description] = homework.description;
    initialValues[formFields.startDate] = `${start.getFullYear()}-${getFull(start.getMonth())}-${getFull(start.getDate())}`;
    initialValues[formFields.startTime] = `${getFull(start.getHours())}:${getFull(start.getMinutes())}`;
    initialValues[formFields.endDate] = `${end.getFullYear()}-${getFull(end.getMonth())}-${getFull(end.getDate())}`;
    initialValues[formFields.endTime] = `${getFull(end.getHours())}:${getFull(end.getMinutes())}`;
    initialValues[formFields.sendAfter] = homework.sendAfter;

    return (
        <HomeworkForm onSubmit={onSubmit} rote={props.auth.data.user.rote} initialValues={initialValues} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        homework: state.homework,
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {getHomework, updateHomework})(EditSchool);