import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteClass, getClasses} from "../actions";
import '../style/components/ClassesList.css';

const GradesList = props => {
    useEffect(() => {
        props.getClasses();
    }, []);

    const renderClasses = props.classes.map(classData => (
        <tr>
            <td>{classData._id}</td>
            <td>{classData.name}</td>
            <td>{classData.manager}</td>
            <td>
                <Link to={`/edit-class/${classData._id}`}>
                    <i className="edit outline icon classes-list-icon"/>
                </Link>
                <i className="trash alternate outline icon classes-list-danger-icon"
                   onClick={event => props.deleteClass(classData._id)}/>
                <Link to={`/class/${classData._id}`}>
                    <i className="info circle icon classes-list-icon"/>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div className="classes-list-container">
            <div className="classes-list-header">Classes</div>
            <div className="classes-list-table-header-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className="classes-list-table-body-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {renderClasses}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    let grade;

    for(let i = 0; i < state.grades.length; i++) {
        if (state.grades[i]._id === props.grade) {
            grade = state.grades[i];
            break;
        }
    }

    if (!grade) {
        return {
            grades: []
        };
    }

    const classes = [];

    state.classes.forEach(classData => {
        if (grade.classes.includes(classData._id)) {
            classes.push(classData);
        }
    });

    return {
        classes
    };
};

export default connect(mapStateToProps, {deleteClass, getClasses})(GradesList);