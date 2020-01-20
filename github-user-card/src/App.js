import React from "react";
import "./App.css";

import Card from "./components/github-card";

class App extends React.Component {
  state = {
    users: [],
    userText: ""
  };

  componentDidMount() {
    fetch("https://api.github.com/users/JaredBrown1")
      .then(res => res.json())
      .then(users => {
        console.log("fetch: users: ", users);
        this.setState({ ...this.state });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        <Card />
      </div>
    );
  }
}

export default App;
