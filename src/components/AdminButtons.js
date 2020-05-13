import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const AdminButtons = props => {
    return (
        <div>
            <Link to="/create">
                <button>create User</button>
            </Link>
        </div>
    );
};

export default connect(null)(AdminButtons);