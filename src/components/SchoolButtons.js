import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import '../style/components/SchoolButtons.css';

const AdminButtons = props => {
    return (
        <div>
            <Link to={`/create-grade/${props.id}`}>
                <button className="school-buttons-button">create Grade</button>
            </Link>
        </div>
    );
};

export default connect(null)(AdminButtons);