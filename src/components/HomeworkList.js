import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteHomework, getHomework, getUsers} from "../actions";
import '../style/components/HomeworkList.css';

const HomeworkList = props => {
    useEffect(() => {
        props.getHomework();
        props.getUsers();
    }, []);

    const getUsername = id => (props.users[props.users.findIndex(user => user._id === id)] || {}).username;

    const renderSchools = props.homework.map(homework => (
        <tr>
            <td>{homework._id}</td>
            <td>{homework.description}</td>
            <td>{new Date(homework.startAt + (new Date().getTimezoneOffset() * -60 * 1000)).toLocaleString()}</td>
            <td>{new Date(homework.endAt + (new Date().getTimezoneOffset() * -60 * 1000)).toLocaleString()}</td>
            <td>{homework.sendAfter ? 'Yes' : 'No'}</td>
            <td>{getUsername(homework.teacher)}</td>
            <td>
                <Link to={`/edit-homework/${homework._id}`}>
                    <i className="edit outline icon homework-list-icon"/>
                </Link>
                <i className="trash alternate outline icon homework-list-danger-icon"
                   onClick={event => props.deleteHomework(homework._id)}/>
                <Link to={`/homework-answers/${homework._id}`}>
                    <i className="info circle icon homework-list-icon"/>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div className="homework-list-container">
            <div className="homework-list-header">Homework</div>
            <div className="homework-list-table-header-container">
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
            <div className="homework-list-table-body-container">
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
    let lesson;

    for (let i = 0; i < state.lessons.length; i++) {
        if (state.lessons[i]._id === props.lesson) {
            lesson = state.lessons[i];
        }
    }

    if (!lesson) {
        return {
            lessons: []
        };
    }

    const homework = [];

    state.homework.forEach(homeworkD => {
        if (lesson.homework.includes(homeworkD._id)) {
            homework.push(homeworkD);
        }
    });

    return {
        homework,
        users: state.users
    };
};

export default connect(mapStateToProps, {deleteHomework, getHomework, getUsers})(HomeworkList);