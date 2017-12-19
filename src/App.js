import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import * as routes from './config/routes';

const App = () => (
  <Router>
    <div className="App p-2">
      {/* <Route exact path={routes.ROOT} component={RootPage} /> */}
      <Route path={routes.LOGIN} component={LoginPage} />
      {/* <Route path={routes.REGISTRATION} component={RegistrationPage} />
      <Route path={routes.HOME} component={HomePage} /> */}
    </div>
  </Router>
)

export default App;
