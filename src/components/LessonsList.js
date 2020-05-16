import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteLesson, getLessons} from "../actions";
import '../style/components/LessonsList.css';

const LessonsList = props => {
    useEffect(() => {
        props.getLessons();
    }, []);

    const getUsername = id => props.users[props.users.findIndex(user => user._id === id)].username;

    const renderSchools = props.lessons.map(lesson => (
        <tr>
            <td>{lesson._id}</td>
            <td>{lesson.name}</td>
            <td>{getUsername(lesson.teacher)}</td>
            <td>{lesson.manager}</td>
            <td>
                <Link to={`/edit-lesson/${lesson._id}`}>
                    <i className="edit outline icon lessons-list-icon"/>
                </Link>
                <i className="trash alternate outline icon lessons-list-danger-icon"
                   onClick={event => props.deleteLesson(lesson._id)}/>
            </td>
        </tr>
    ));

    return (
        <div className="lessons-list-container">
            <div className="lessons-list-header">Lessons</div>
            <div className="lessons-list-table-header-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Teacher</th>
                        <th>Manager</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className="lessons-list-table-body-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {renderSchools}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    let classData;

    for(let i = 0; i < state.classes.length; i++) {
        if (state.classes[i]._id === props.classData) {
            classData = state.classes[i];
        }
    }

    if (!classData) {
        return {
            lessons: []
        };
    }

    const lessons = [];

    state.lessons.forEach(lesson => {
        if (classData.lessons.includes(lesson._id)) {
            lessons.push(lesson);
        }
    });

    return {
        lessons,
        users: state.users
    };
};

export default connect(mapStateToProps, {deleteLesson, getLessons})(LessonsList);