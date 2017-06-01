import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import App from './App';

const appReducer = (state = {}, action) => {
    return state;
};

const store = createStore(
  combineReducers({
    app: appReducer,
    form: formReducer
  })
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
