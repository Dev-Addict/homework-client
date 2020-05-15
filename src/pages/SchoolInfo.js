import React from "react";
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

import SchoolButtons from "../components/SchoolButtons";
import {getSchools, updateSchool} from "../actions";
import history from "../history";
import '../style/pages/SchoolInfo.css';

const SchoolInfo = props => {
    const {id} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div/>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    if (props.schools.length === 0) {
        props.getSchools();
    }

    let school;

    for (let i = 0; i < props.schools.length; i++) {
        if (props.schools[i]._id === id) {
            school = props.schools[i];
            break;
        }
    }

    if (!school) {
        return (<div>School doesn't exists.</div>)
    }

    return (
        <div className="school-info-container">
            <h2 className="school-info-header">{school.name}<sub>({school._id})</sub></h2>
            <SchoolButtons id={school._id}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        schools: state.schools,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {getSchools, updateSchool})(SchoolInfo);