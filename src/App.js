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
    app: PropTypes.object.isRequired
  }
  
  render() {
    return (
      <div>
        <h1>App</h1>
        <Test />  
      </div>
    );
  }
}

const mapStateToProps = () => ({
  app: { initialized: true }
});

export default connect(
  mapStateToProps
)(App);