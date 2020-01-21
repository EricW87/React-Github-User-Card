import React from 'react';
//import axios from 'axios';
import GetUser from './Components/GetUser';
import UserList from './Components/UserList';
import UserCard from './Components/UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { userName: "", data: null, followers_data: null, stop: true };
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.setName("EricW87");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log(this.state.stop);
    if(!this.state.stop) //prevent infinite loop
      this.downloadUser();
  }

  setName = name => {
    this.setState({ userName: name, data: null, followers_data: null, stop: false });
  }

  downloadUser = () => {
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then( res => res.json())
      .then( user => {
        this.downloadFollowers(user);
      })
      .catch( err => {
        console.log(`Error in downloadUser: ${err}`)

      });
  }

  downloadFollowers = (user) => {
    fetch(user.followers_url)
      .then( res => res.json())
      .then( followers => {
        console.log(followers)
        this.setState({ 
          userName: this.state.userName,
          data: user,
          followers_data: followers,
          stop: true
        });
      })
      .catch( err => {
        console.log(`Error in downloadFollowers: ${err}`)
      });
  }


  render() {
    if(this.state.userName === "")
      return <div className="getuser"><GetUser userName={this.state.userName} setName={this.setName}/></div>

    return (
      <div>
        <GetUser userName={this.state.userName} setName={this.setName}/>
        <h1>{this.state.userName}'s Profile</h1>
        <UserCard user={true} data={this.state.data}/>
        <h1>{this.state.userName}'s Followers</h1>
        <UserList followers={this.state.followers_data}/>
      </div>
    );
  }
}

export default App;
