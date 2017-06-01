import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TestForm from './TestForm';
import TestRequest from './TestRequest'

class Test extends Component {

  static propTypes = {
        user: PropTypes.object.isRequired,        
    };

  handleSubmit = () => {
    console.log('handle submit!');    
  }

  render() {
      return (
        <div>
          <h2>Test Page</h2>
          <TestForm onSubmit={this.handleSubmit} />                
          <TestRequest />
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
    user: { name: 'Moe' }  
});

export default connect(
  mapStateToProps
)(Test);