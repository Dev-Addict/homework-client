import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {signOut} from "../actions";
import history from "../history";
import '../style/components/Header.css';

const Header = (props) => {
    const signOut = () => {
        props.signOut();
        history.push('/');
    };

    const actionButton = props.auth.isSigned ?
        <Fragment>
            <Link to="/dashboard">
                <button className="header-sign-button">Dashboard</button>
            </Link>
            <button className="header-sign-button" onClick={signOut}>Sign Out</button>
        </Fragment> :
        <Link to="/signin">
            <button className="header-sign-button">Sign In</button>
        </Link>;

    return (
        <div className="header-container">
            <Link to="/">
                <div className="header-logo header-child">Homework</div>
            </Link>
            <div className="sign-container header-child">
                {actionButton}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, {signOut})(Header);