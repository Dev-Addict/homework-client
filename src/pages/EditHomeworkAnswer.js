import React from "react";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';

import HomeworkAnswerForm from "../components/HomeworkAnswerForm";
import {updateHomeworkAnswer} from "../actions";
import history from "../history";

const CreateHomeworkAnswer = props => {
    const {id} = useParams();
    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    const onSubmit = file => {
        const formData = new FormData();
        formData.append('file', file);

        props.updateHomeworkAnswer(formData, id);
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

export default connect(mapStateToProps, {updateHomeworkAnswer})(CreateHomeworkAnswer);