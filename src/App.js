import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const RootPage = () => <div> root page </div>
const LoginPage = () => <div> login page </div>
const RegistrationPage = () => <div> registration page </div>
const HomePage = () => <div> home page </div>

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={RootPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegistrationPage} />
      <Route path="/home" component={HomePage} />
    </div>
  </Router>
)

export default App;
