import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wrapRequest } from './requestActions'

class TestRequest extends Component {

  static propTypes = {
    onFetchRequest: PropTypes.func.isRequired,
    fetchRequest: PropTypes.object.isRequired             
  };
  
  render() {    
    const { fetchRequest, onFetchRequest } = this.props;    

    let fetchRequestDescription = 'not started';
    if (fetchRequest.inflight === true)
      fetchRequestDescription = 'in progress';
    else if (fetchRequest.inflight === false)
      fetchRequestDescription = 'finished';

    return (
      <div>
        <h3>Simulated Fetch Request</h3>          
        <p>Inflight: {fetchRequestDescription}</p>
        <p><a href="#" onClick={onFetchRequest}>Trigger Request</a></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fetchRequest: state.request.fetch || {}
});

const mapDispatchToProps = (dispatch) => ({
  onFetchRequest: () => {
    return wrapRequest(dispatch, 'fetch', () => {
      return  new Promise((resolve) => {
        console.log('>> starting fetch request...');
        setTimeout(() => {
          console.log('>> finished fetch request!');
          resolve();
        }, 2000);
      })
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestRequest);