import React, {useLayoutEffect} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getClasses, getLessons} from "../actions";
import '../style/components/TeacherDashboard.css';

const TeacherDashboard = props => {
    useLayoutEffect(() => {
        props.getClasses();
        props.getLessons();
    }, []);

    const renderTeacherCards = () => props.classes.map((classData, index) => (
        <Link to={`/create-homework/${props.lessons[index]._id}`}>
            <div className="teacher-dashboard-teacher-card">
                <div className="teacher-dashboard-teacher-card-class">Class: {classData.name}</div>
                <div className="teacher-dashboard-teacher-card-lesson">lesson: {props.lessons[index].name}</div>
            </div>
        </Link>
    ));

    return (
        <div className="teacher-dashboard-container">
            {renderTeacherCards()}
        </div>
    );
};

const mapStateToProps = (state) => {
    const classes = [];
    const lessons = [];
    state.classes.forEach(classData => classData.lessons.forEach(lesson => {
        let lessonData;

        state.lessons.forEach(lessonD => {
            if (lessonD._id === lesson) {
                lessonData = lessonD;
            }
        });

        if ((lessonData || {}).teacher === state.auth.data.user._id) {
            classes.push(classData);
            lessons.push(lessonData);
        }
    }));

    return {
        classes,
        lessons
    };
};

export default connect(mapStateToProps, {getClasses, getLessons})(TeacherDashboard);