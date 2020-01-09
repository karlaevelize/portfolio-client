import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch></Switch>
      </div>
    );
  }
}

export default connect()(App);
