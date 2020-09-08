import React from "react";
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Onboarding from './components/onboarding/Onboarding';
import './App.sass';
import './App.css';


function App({ history }) {
  return (
    <Router>
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/Onboarding">
        <Onboarding />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
