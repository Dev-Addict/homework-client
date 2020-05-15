import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteGrade, getGrades} from "../actions";
import '../style/components/SchoolsList.css';

const GradesList = props => {
    useEffect(() => {
        props.getGrades();
    }, []);

    const renderSchools = props.grades.map(grade => (
        <tr>
            <td>{grade._id}</td>
            <td>{grade.name}</td>
            <td>{grade.manager}</td>
            <td>
                <Link to={`/edit-school/${grade._id}`}>
                    <i className="edit outline icon schools-list-icon"/>
                </Link>
                <i className="trash alternate outline icon schools-list-danger-icon"
                   onClick={event => props.deleteSchool(grade._id)}/>
                <Link to={`/school/${grade._id}`}>
                    <i className="info circle icon schools-list-icon"/>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div className="schools-list-container">
            <div className="schools-list-header">Grades</div>
            <div className="schools-list-table-header-container">
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
            <div className="schools-list-table-body-container">
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
    let school;

    for(let i = 0; i < state.schools.length; i++) {
        if (state.schools[i]._id === props.school) {
            school = state.schools[i];
        }
    }

    if (!school) {
        return {
            grades: []
        };
    }

    const grades = [];

    state.grades.forEach(grade => {
        if (school.grades.includes(grade._id)) {
            grades.push(grade);
        }
    });

    return {
        grades
    };
};

export default connect(mapStateToProps, {deleteGrade, getGrades})(GradesList);