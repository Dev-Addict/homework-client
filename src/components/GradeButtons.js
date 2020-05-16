import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import '../style/components/GradeButtons.css';

const AdminButtons = props => {
    return (
        <div>
            <Link to={`/create-class/${props.id}`}>
                <button className="grade-buttons-button">create Class</button>
            </Link>
        </div>
    );
};

export default connect(null)(AdminButtons);