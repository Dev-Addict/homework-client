import React from "react";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';

import HomeworkAnswerForm , {formFields} from "../components/HomeworkAnswerForm";
import {createHomeworkAnswer} from "../actions";
import history from "../history";

const CreateGrade = props => {
    const {homework} = useParams();
    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    const onSubmit = formValues => {
        // props.createHomeworkAnswer({
        //     homework
        // });
    };

    return (
        <HomeworkAnswerForm onSubmit={(onSubmit)} rote={props.auth.data.user.rote} initialValues={{}} err={props.err}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        err: state.err
    };
};

export default connect(mapStateToProps, {createHomeworkAnswer})(CreateGrade);