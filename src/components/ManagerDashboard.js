import React, {useEffect} from "react";
import {connect} from "react-redux";

import SchoolsList from "./SchoolsList";
import ManagerButtons from "./ManagerButtons";
import UsersList from "./UsersList";
import {getUsers, getSchools} from "../actions";

const ManagerDashboard = props => {
    useEffect(() => {
        props.getSchools();
        props.getUsers();
    }, []);
    return (
        <div>
            <ManagerButtons/>
            <SchoolsList/>
            <UsersList/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};


export default connect(mapStateToProps, {getSchools, getUsers})(ManagerDashboard);