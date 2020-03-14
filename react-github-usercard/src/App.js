import React from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/JaredBrown1")
      .then(res => {
        console.log("from CDM Card.js", res);
        return this.setState({ userCards: [res.data] });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        {this.state.users.map(item => {
          return <Card key={item.id} img={item.avatar_ur} />;
        })}
      </div>
    );
  }
}

export default App;
