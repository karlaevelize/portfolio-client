import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="signup">Sign Up</Link>
        <br />
        <Link to="chat">Chat</Link>
      </div>
    );
  }
}

export default Toolbar;
