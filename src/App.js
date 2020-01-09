import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./components/LoginPage";
import Toolbar from "./components/Toolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
