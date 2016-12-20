import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    render() {

    }
}

Form = reduxForm({
    form: 'form_name'
})(Form);

export default Form;
