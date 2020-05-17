import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import '../style/components/LessonButtons.css';

const AdminButtons = props => {
    return (
        <div>
            <Link to={`/create-homework/${props.id}`}>
                <button className="lesson-buttons-button">create Homework</button>
            </Link>
        </div>
    );
};

export default connect(null)(AdminButtons);