import "../pages.css";
import React from "react";
import { connect } from "react-redux";
import { login } from "../store/login/actions";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = login(this.state.email, this.state.password);
    this.props.dispatch(action);
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.login.jwt !== null) {
      return <h2 className="form">You are logged in!</h2>;
    }

    console.log(this.props);

    return (
      <div className="form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Login</button>
          </p>
        </form>
        <div>
          <h3>
            If you don't have an account, please <a href="/signup">sign up</a>{" "}
            first
          </h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    login: reduxState.login
  };
}

export default connect(mapStateToProps)(LoginPage);
