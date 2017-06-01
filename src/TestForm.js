import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

class TestForm extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <h3>Test Form</h3>
                <Field name="email" component="input" type="text" placeholder="Enter some text here..." />                                
            </form>
        )
    }
}

export default reduxForm({
    form: 'test'
})(TestForm);