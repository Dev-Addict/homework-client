import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import '../style/components/AdminButtons.css';

const ManagerButtons = props => {
    return (
        <div>
            <Link to="/create-school">
                <button className="admin-buttons-button">create School</button>
            </Link>
            <Link to="/create/teacher">
                <button className="admin-buttons-button">create Teacher</button>
            </Link>
        </div>
    );
};

export default connect(null)(ManagerButtons);