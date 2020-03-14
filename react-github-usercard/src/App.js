import React from "react";
import "./App.css";
import Card from "./components/Card";
import FollowerCard from "./components/followerCard";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/JaredBrown1")
      .then(res => {
        console.log("from CDM Card.js", res);
        return this.setState({ users: [res.data] });
      })
      .catch(err => console.error(err));

    axios
      .get("https://api.github.com/users/JaredBrown1/followers")
      .then(res => {
        console.log("from CDM FollowerCard.js", res);
        return this.setState({ followers: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        {this.state.users.map(item => {
          return (
            <Card
              key={item.id}
              name={item.name}
              bio={item.bio}
              location={item.location}
              img={item.avatar_url}
            />
          );
        })}
        <h1>Followers</h1>
        {this.state.followers.map(item => {
          return (
            <FollowerCard
              login={item.login}
              key={item.id}
              img={item.avatar_url}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
