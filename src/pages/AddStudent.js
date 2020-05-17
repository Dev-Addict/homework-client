import React, {useLayoutEffect} from "react";
import {connect} from 'react-redux';

import {getClasses, getUsers} from "../actions";

const AddStudent = props => {
    useLayoutEffect(() => {
        props.getClasses();
        props.getUsers();
    },[]);

    return (
        <div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    let classData;

    state.classes.forEach(classD => {
        if (props.classId === classD._id) {
            classData = classD;
        }
    });

    const students = [];
    const selectedStudents = [];

    state.users.forEach(user => {
        if (user.manager === state.auth.data.user._id && user.rote === 'student') {
            if (classData.students.includes(user._id)) {
                selectedStudents.push(user);
            } else {
                students.push(user);
            }
        }
    });

    return {
        students,
        selectedStudents
    };
};

export default connect(mapStateToProps, {getUsers, getClasses})(AddStudent);