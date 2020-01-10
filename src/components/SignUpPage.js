import "../pages.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/signup/actions";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = signUp(
      this.state.name,
      this.state.email,
      this.state.password
    );
    this.props.dispatch(action);
    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.login.jwt !== null) {
      return <h2 className="form">You already have an account!</h2>;
    }
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="name"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Sign Up</button>
          </p>
        </form>
        <p>
          After sign up, go to <a href="/login"> login</a> page
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    login: reduxState.login
  };
}

export default connect(mapStateToProps)(SignUp);
