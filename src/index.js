import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import {Router,browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
import mainReducer from './main-reducer';
import appRoutes from './main-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import routerMiddleware from './middlewares/router-middleware/route-handler';

// import { Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import App from './components/App';

let store = createStore(
  mainReducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware)
  )
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={appRoutes(store)} />
  </Provider>

), document.getElementById('root'));


