import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import '../style/components/AdminButtons.css';

const AdminButtons = props => {
    return (
        <div>
            <Link to="/create">
                <button className="admin-buttons-button">create User</button>
            </Link>
        </div>
    );
};

export default connect(null)(AdminButtons);