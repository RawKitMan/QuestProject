// Imports:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuestNav from './components/QuestNav';
import Quest from './pages/Quest';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import NoMatch from './pages/NoMatch';
import './App.css';

class App extends Component {
  state = {
    signedIn: false
  };

  render() {
    return <Router>
      <QuestNav signedIn={this.state.signedIn} />
      <Switch>
        <Route exact path="/" component={this.state.signedIn ? Quest : Welcome} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route component={NoMatch} />
      </Switch>
    </Router>

  }
}

export default App;