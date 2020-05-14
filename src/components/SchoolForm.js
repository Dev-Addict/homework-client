import React, {Fragment} from "react";
import {Field, reduxForm} from "redux-form";

import '../style/components/UserForm.css';

const formName = 'SCHOOL_FORM';

export const formFields = {
    manager: 'MANAGER',
    name: 'NAME'
};