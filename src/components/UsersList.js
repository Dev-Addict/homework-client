import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteUser} from "../actions";
import '../style/components/UsersList.css';

const UsersList = props => {
    const renderUsers = props.users.map(user => (
        <tr>
            <td>{user._id}</td>
            <td>{user.rote}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.manager}</td>
            <td>
                <Link to={`/edit/${user._id}`}>
                    <i className="edit outline icon users-list-icon"/>
                </Link>
                <i className="trash alternate outline icon users-list-danger-icon" onClick={event => props.deleteUser(user._id)}/>
            </td>
        </tr>
    ));

    return (
        <div className="users-list-container">
            <div className="users-list-header">Users</div>
            <div className="users-list-table-header-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Rote</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Manager</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className="users-list-table-body-container">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {renderUsers}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    const users = state.users.filter(user => user.manager === state.auth.data.user._id);
    return {
        users
    };
};

export default connect(mapStateToProps, {deleteUser})(UsersList);