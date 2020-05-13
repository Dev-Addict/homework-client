import React, {useEffect} from "react";
import {connect} from "react-redux";

import UsersList from "./UsersList";
import {getUsers} from "../actions";

const AdminDashboard = props => {
    useEffect(() => {
        props.getUsers();
    }, []);
    return (
        <div>
            <UsersList/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, {getUsers})(AdminDashboard);