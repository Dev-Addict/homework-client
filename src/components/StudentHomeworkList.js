import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteHomework, getHomework, getUsers, getClasses, getLessons, getHomeworkAnswers} from "../actions";
import '../style/components/StudentHomeworkList.css';

const StudentHomeworkList = props => {
    useEffect(() => {
        props.getHomework();
        props.getUsers();
        props.getClasses();
        props.getLessons();
        props.getHomeworkAnswers();
    }, []);

    const getUsername = id => (props.users[props.users.findIndex(user => user._id === id)] || {}).username;

    const renderHomework = props.homework.map(homework => {
        let homeworkAnswer;

        props.homeworkAnswers.forEach(homeworkAnswerD => {
                if (homeworkAnswerD.homework === homework._id) {
                    homeworkAnswer = homeworkAnswerD;
                }
            }
        );

        return (
            <tr className={homeworkAnswer ? 'student-homework-list-done-tr' : ''}>
                <td>{homework._id}</td>
                <td>{homework.description}</td>
                <td>{homework.startAt}</td>
                <td>{homework.endAt}</td>
                <td>{homework.sendAfter ? 'Yes' : 'No'}</td>
                <td>{getUsername(homework.teacher)}</td>
                <td>
                    {
                        homeworkAnswer ?
                            <Link to={`/edit-homework-answer/${homeworkAnswer._id}`}>
                                <i className="edit outline icon student-homework-list-icon"/>
                            </Link> :
                            <Link to={`/create-homework-answer/${homework._id}`}>
                                <i className="location arrow icon student-homework-list-icon"/>
                            </Link>
                    }
                </td>
            </tr>
        )
    });

    return (
        <div className="student-homework-list-container">
            <div className="student-homework-list-header">Homework</div>
            <div className="student-homework-list-table-header-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Start At</th>
                        <th>End At</th>
                        <th>Send After</th>
                        <th>Teacher</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className="student-homework-list-table-body-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {renderHomework}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    let classData;

    for (let i = 0; i < state.classes.length; i++) {
        if (state.classes[i].students.includes(state.auth.data.user._id)) {
            classData = state.classes[i];
        }
    }

    if (!classData) {
        return {
            homework: []
        };
    }

    const homework = [];

    classData.lessons.forEach(lesson => {
        state.lessons.forEach(lessonData => {
            if (lesson === lessonData._id) {
                lessonData.homework.forEach(homeworkD => {
                    state.homework.forEach(homeworkD2 => {
                        if (homeworkD2._id === homeworkD) {
                            homework.push(homeworkD2);
                        }
                    })
                })
            }
        })
    });

    return {
        homework,
        users: state.users,
        homeworkAnswers: state.homeworkAnswers
    };
};

export default connect(mapStateToProps, {
    deleteHomework,
    getHomework,
    getUsers,
    getClasses,
    getLessons,
    getHomeworkAnswers
})(StudentHomeworkList);