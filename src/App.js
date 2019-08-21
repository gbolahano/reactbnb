import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Routes from './Routes';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;
