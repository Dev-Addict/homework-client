import React from "react";
import {connect} from "react-redux";

import '../style/components/Loading.css';

const Loading = (props) => {
    return (
        <div className="loading-loading" style={{zIndex: props.viewState==='loading'?9999:-9999}}>
            <div className="loading-text">Loading...</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        viewState: state.viewState
    };
};

export default connect(mapStateToProps)(Loading);