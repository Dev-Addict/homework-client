import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getUsers} from "../actions";

const AdminDashboard = props => {
    useEffect(() => {
        props.getUsers();
    }, []);
    return (
        <div>
            AdminDashboard
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, {getUsers})(AdminDashboard);