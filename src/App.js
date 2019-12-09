import React from 'react';
import axios from 'axios';
import GetUser from './Components/GetUser';
import UserList from './Components/UserList';
import UserCard from './Components/UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { userName: "", data: null, followers_data: null };
  }

  setName = name => {
    this.setState({ userName: name, data: null, followers_data: null }, () => this.downloadUser());
  }

  downloadUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then( res => {
        this.setState({ 
          userName: this.state.userName,
          data: res.data,
          followers_data: null
        }, () => this.downloadFollowers());
        console.log(this.state.data);
      })
      .catch( err => {
        console.log(`Error in downloadUser: ${err}`)

      });
  }

  downloadFollowers = () => {
    axios
      .get(this.state.data.followers_url)
      .then( res => {
        this.setState({ 
          userName: this.state.userName,
          data: this.state.data,
          followers_data: res.data
        });
        console.log(this.state.followers_data);
      })
      .catch( err => {
        console.log(`Error in downloadFollowers: ${err}`)

      });
  }


  render() {
    if(this.state.userName === "")
      return <div className="App"><GetUser userName= {this.state.userName} setName={this.setName}/></div>

    return (
      <div className="App">
        <GetUser userName= {this.state.userName} setName={this.setName}/>
        <h1>User Profile</h1>
        <UserCard data={this.state.data}/>
        <h1>{this.state.userName}'s Followers</h1>
        <UserList followers={this.state.followers_data}/>
      </div>
    );
  }
}

export default App;
