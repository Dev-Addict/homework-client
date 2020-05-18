import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {getHomework, getClasses, getUsers, getLessons, getHomeworkAnswers} from "../actions";
import '../style/components/HomeworkAnswers.css';

const HomeworkList = props => {
    useEffect(() => {
        props.getHomeworkAnswers();
        props.getHomework();
        props.getUsers();
        props.getClasses();
        props.getLessons();
    }, []);

    const renderStudents = props.students.map(student => {
        const homeworkAnswer =
            props.homeworkAnswers[props.homeworkAnswers
                .findIndex(homeworkAnswer => homeworkAnswer.manager = student._id)];
        return (
            <tr>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{homeworkAnswer?homeworkAnswer.requestAt + (new Date().getTimezoneOffset() * -60 * 1000):'-'}</td>
                <td>
                    <a href={`http://127.0.0.1:3001/api/v1/download/homeworkAnswers/${homeworkAnswer.file}`}>
                        <i className="download icon homework-answers-icon"/>
                    </a>
                </td>
            </tr>
        )
    });

    return (
        <div className="homework-answers-container">
            <div className="homework-answers-header">HomeworkAnswers for {props.homework}</div>
            <div className="homework-answers-table-header-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Request At</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className="homework-answers-table-body-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {renderStudents}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    let lesson;

    for (let i = 0; i < state.lessons.length; i++) {
        if (state.lessons[i].includes(props.homework)) {
            lesson = state.lessons[i];
        }
    }

    if (!lesson) {
        return {
            students: []
        };
    }

    let classData;

    for (let i = 0; i < state.classes.length; i++) {
        if (state.classes[i].includes(lesson._id)) {
            classData = state.classes[i];
        }
    }

    if (!classData) {
        return {
            students: []
        };
    }

    let students = [];

    for (let i = 0; i < state.users.length; i++) {
        if (classData.students.includes(state.users[i]._id)) {
            students.push(state.users[i]);
        }
    }

    return {
        students,
        homeworkAnswers: state.homeworkAnswers.filter(homeworkAnswer => homeworkAnswer.homework === props.homework)
    };
};

export default connect(mapStateToProps, {
    getClasses,
    getHomework,
    getUsers,
    getLessons,
    getHomeworkAnswers
})(HomeworkList);