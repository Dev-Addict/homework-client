import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteSchool} from "../actions";
import '../style/components/SchoolsList.css';

const UsersList = props => {
    const renderSchools = props.schools.map(school => (
        <tr>
            <td>{school._id}</td>
            <td>{school.name}</td>
            <td>{school.manager}</td>
            <td>
                <Link to={`/edit-school/${school._id}`}>
                    <i className="edit outline icon schools-list-icon"/>
                </Link>
                <i className="trash alternate outline icon schools-list-danger-icon"
                   onClick={event => props.deleteSchool(school._id)}/>
                <Link to={`/school/${school._id}`}>
                    <i className="info circle icon schools-list-icon"/>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div className="schools-list-container">
            <div className="schools-list-header">Schools</div>
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

const mapStateToProps = state => {
    return {
        schools: state.schools
    };
};

export default connect(mapStateToProps, {deleteSchool})(UsersList);