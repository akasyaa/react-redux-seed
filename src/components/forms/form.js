import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const renderInput = field =>
    <div>
        <input {...field.input} type={field.type} />
        {field.meta.touched &&
         field.meta.error &&
         <span className='error'>{field.meta.error}</span>}
    </div>

class Form extends Component {
    onSubmit() {

    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='form-name'>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <Field
                        name='name'
                        component={renderInput}
                        type='text' />
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { prop: state.to.map }
}

Form = reduxForm({
    form: 'form_name'
})(Form);

export default Form = connect(null)(Form);
