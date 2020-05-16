import React from "react";
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

import {getClasses, updateGrade} from "../actions";
import history from "../history";
import '../style/pages/GradeInfo.css';

const SchoolInfo = props => {
    const {id} = useParams();

    if (!props.auth.isSigned) {
        history.push('/');
        return (<div>logIn</div>);
    }

    if (['teacher', 'student'].includes(props.auth.data.user.rote)) {
        history.push('/dashboard');
        return (<div/>);
    }

    if (props.classes.length === 0) {
        props.getClasses();
    }

    let classData;

    for (let i = 0; i < props.classes.length; i++) {
        if (props.classes[i]._id === id) {
            classData = props.classes[i];
            break;
        }
    }

    if (!classData) {
        return (<div>Class doesn't exists.</div>)
    }

    return (
        <div className="grade-info-container">
            <h2 className="grade-info-header">{classData.name}<sub>({classData._id})</sub></h2>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        classes: state.classes,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {getClasses, updateGrade})(SchoolInfo);