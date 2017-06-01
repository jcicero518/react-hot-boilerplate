import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import App from './App';
import requestReducer from './requestReducer'

const reduxStoreEnhancers = [ applyMiddleware(thunk) ];
if (window.__REDUX_DEVTOOLS_EXTENSION__)
    reduxStoreEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
  combineReducers({
    request: requestReducer,
    form: formReducer
  }),
  compose.apply(null, reduxStoreEnhancers)
);

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>      
        <Component />
      </Provider>
    </AppContainer>
    ,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
