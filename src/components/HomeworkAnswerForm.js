import React, {useState} from "react";

import Input from "./Input";
import '../style/components/HomeworkAnswerForm.css';

const HomeworkAnswerForm = props => {
    const [file, setFile] = useState({});

    return (
        <form className="homework-answer-form-form" onSubmit={event => {event.preventDefault(); props.onSubmit(file)}}>
            <div className="homework-answer-form-inputs-container">
                <input name="" type="file" accept="application/pdf" onChange={event => setFile(event.target.files[0])}
                       required/>
            </div>
            <div className="homework-answer-form-error">{props.err || ''}</div>
            <button type="submit" className="homework-answer-form-submit-button">submit</button>
        </form>
    );
};

export default HomeworkAnswerForm