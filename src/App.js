import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Test from './Test'


// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
class App extends Component {

  static propTypes = {
    // NOTE: When this is React.PropTypes.object and an object is provided in mapStateToProps(), our "TestRequest" component functions correctly.
    // initialized: PropTypes.object
    initialized: PropTypes.bool
  }
  
  render() {
    return (
      <div>
        <h1>Appe</h1>
        <Test />  
      </div>
    );
  }
}

const mapStateToProps = () => ({  
  // NOTE: as indicated above in propTypes, when initialized is an object, the "TestRequest" component functions correctly.
  //initialized: { result: true }
  initialized: true
});

export default connect(
  mapStateToProps
)(App);