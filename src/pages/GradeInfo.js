import React from "react";
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

import {getGrades, updateSchool} from "../actions";
import GradeButtons from "../components/GradeButtons";
import ClassesList from "../components/ClassesList";
import history from "../history";
import '../style/pages/GradeInfo.css';

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

    if (props.grades.length === 0) {
        props.grades();
    }

    let grade;

    for (let i = 0; i < props.grades.length; i++) {
        if (props.grades[i]._id === id) {
            grade = props.grades[i];
            break;
        }
    }

    if (!grade) {
        return (<div>School doesn't exists.</div>)
    }

    return (
        <div className="grade-info-container">
            <h2 className="grade-info-header">{grade.name}<sub>({grade._id})</sub></h2>
            <GradeButtons id={grade._id}/>
            <ClassesList grade={grade._id}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        grades: state.grades,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {getGrades, updateSchool})(SchoolInfo);