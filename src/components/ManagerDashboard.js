import React, {useEffect} from "react";
import {connect} from "react-redux";

import SchoolsList from "./SchoolsList";
import ManagerButtons from "./ManagerButtons";
import {getSchools} from "../actions";

const ManagerDashboard = props => {
    useEffect(() => {
        props.getSchools();
    }, []);
    return (
        <div>
            <ManagerButtons/>
            <SchoolsList/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};


export default connect(mapStateToProps, {getSchools})(ManagerDashboard);