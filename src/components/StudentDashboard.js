import React from "react";
import {connect} from 'react-redux';

import StudentHomeworkList from "./StudentHomeworkList";
import '../style/components/StudentDashboard.css';

const StudentDashboard = props => {
    return (
        <div className="student-dashboard-container">
            <StudentHomeworkList/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(StudentDashboard);