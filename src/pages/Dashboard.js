import React from "react";
import {connect} from 'react-redux';

import AdminDashboard from "../components/AdminDashboard";
import ManagerDashboard from "../components/ManagerDashboard";
import TeacherDashboard from "../components/TeacherDashboard";
import StudentDashboard from "../components/StudentDashboard";
import history from "../history";

const Dashboard = props => {
    if (!props.auth.isSigned) {
        history.push('/');
        return <div/>
    }
    const components = {
        admin: <AdminDashboard/>,
        manager: <ManagerDashboard/>,
        teacher: <TeacherDashboard/>,
        student: <StudentDashboard/>
    };
    return <div>{components[props.auth.data.user.rote]}</div>;
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Dashboard);