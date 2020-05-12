import React from "react";
import {Link} from 'react-router-dom';

import '../style/components/Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/">
                <div className="header-logo header-child">Homework</div>
            </Link>
            <div className="sign-container header-child">
                <button className="header-sign-button">Sign In</button>
                {/*<button className="header-sign-button">Sign Out</button>*/}
            </div>
        </div>
    );
};

export default Header;