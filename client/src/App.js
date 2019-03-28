// Imports:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quest from './pages/Quest';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Chart from "./pages/Chart";
import NoMatch from './pages/NoMatch';
import themes from './utils/themes'
import './App.css';

class App extends Component {
  state = {
    signedIn: false,
    theme: themes('redGreen')
  };

  render() {
    document.getElementById('root').style.backgroundColor = this.state.theme.lightBg.backgroundColor;
    return <Router>
      <Switch>
        <Route exact path="/" render={() => this.state.signedIn 
          ?  <Quest theme={this.state.theme}  signedIn={this.state.signedIn} /> 
          : <Welcome theme={this.state.theme} signedIn={this.state.signedIn} />} />
        <Route exact path="/signup" render={() => <Signup theme={this.state.theme} signedIn={this.state.signedIn} />} />
        <Route exact path="/signin" render={() => <Signin theme={this.state.theme} signedIn={this.state.signedIn} />} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  }
}

export default App;