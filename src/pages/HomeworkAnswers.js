import React from "react";
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import HomeworkAnswers from "../components/HomeworkAnswers";
import history from "../history";

const HomeworkAnswersPage = props => {
    const {homework} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    return (
        <HomeworkAnswers homework={homework}/>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(HomeworkAnswersPage);