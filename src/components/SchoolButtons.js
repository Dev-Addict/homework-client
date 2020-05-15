import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import '../style/components/SchoolButtons.css';

const AdminButtons = props => {
    return (
        <div>
            <Link to="/">
                <button className="school-buttons-button">create Grade</button>
            </Link>
        </div>
    );
};

export default connect(null)(AdminButtons);