import React from "react";
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

import LessonButtons from "../components/LessonButtons";
import HomeworkList from "../components/HomeworkList";
import {getLessons} from "../actions";
import history from "../history";
import '../style/pages/LessonInfo.css';

const SchoolInfo = props => {
    const {id} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    if (props.lessons.length === 0) {
        props.getLessons();
    }

    let lesson;

    for (let i = 0; i < props.lessons.length; i++) {
        if (props.lessons[i]._id === id) {
            lesson = props.lessons[i];
            break;
        }
    }

    if (!lesson) {
        return (<div>Grade doesn't exists.</div>)
    }

    return (
        <div className="lesson-info-container">
            <h2 className="lesson-info-header">{lesson.name}<sub>({lesson._id})</sub></h2>
            <LessonButtons id={lesson._id}/>
            <HomeworkList lesson={lesson._id}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        lessons: state.lessons,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {getLessons})(SchoolInfo);