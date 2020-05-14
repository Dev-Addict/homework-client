import React from "react";

import '../style/components/Input.css';

const Input = ({input, meta, type}) => {
    const createLabel = name => name.charAt(0) + name.substr(1).toLowerCase();
    return (
        <div>
            <label className="input-input-label">{createLabel(input.name)}</label>
            <input {...input} className="input-input" placeholder={createLabel(input.name)} type={type}/>
            <div className="input-input-error">{meta.touched && !meta.active ? meta.error : ''}</div>
        </div>
    );
};

export default Input;