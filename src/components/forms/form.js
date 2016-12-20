import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = field =>
    <div>
        <input {...field.input} type={field.type} />
        {field.meta.touched &&
         field.meta.error &&
         <span className='error'>{field.meta.error}</span>}
    </div>

class Form extends Component {
    render() {
        return(
            <form className='form-name'>
            </form>
        );
    }
}

Form = reduxForm({
    form: 'form_name'
})(Form);

export default Form;
