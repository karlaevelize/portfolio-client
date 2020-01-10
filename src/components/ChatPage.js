import "../pages.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class ChatPage extends Component {
  state = {
    name: "",
    text: ""
  };

  stream = new EventSource("http://localhost:4000/stream");
  componentDidMount() {
    this.stream.onmessage = event => {
      console.log("event test:", event.data);
      const action = JSON.parse(event.data);
      console.log("action test:", action);
      this.props.dispatch(action);
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = async event => {
    const msn = {
      name: this.state.name,
      text: this.state.text
    };
    event.preventDefault();
    const url = "http://localhost:4000/message";
    const response = await superagent.post(url).send(msn);
    console.log("response test:", response);
    this.setState({ name: "", text: "" });
  };

  render() {
    console.log("this.props.message-test:", this.props);
    const { chat } = this.props;
    const list = chat.map(message => (
      <p key={message.id}>
        <b>{message.name} says:</b> {message.text}
      </p>
    ));
    return (
      <main className="form">
        <h2>Enjoy out chat platform, ask questions and interact with people</h2>
        {list}
        <form onSubmit={this.onSubmit}>
          <p>
            <input
              name="name"
              onChange={this.onChange}
              type="text"
              value={this.state.name}
            />
          </p>
          <p>
            <input
              name="text"
              onChange={this.onChange}
              type="text"
              value={this.state.text}
            />
          </p>
          <button type="submit">Submit</button>
        </form>
        <br />
      </main>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    chat: reduxState.chat
  };
}

export default connect(mapStateToProps)(ChatPage);
