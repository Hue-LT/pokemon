import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import MyBag from './components/MyBag';
import Login from './Login/Login';
import { Provider } from 'react-redux';
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/mybag">
          <MyBag />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
