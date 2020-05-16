import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import '../style/components/ClassButtons.css';

const AdminButtons = props => {
    return (
        <div>
            <Link to={`/create-lesson/${props.id}`}>
                <button className="class-buttons-button">create Lesson</button>
            </Link>
        </div>
    );
};

export default connect(null)(AdminButtons);