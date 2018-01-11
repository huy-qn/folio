import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';
import Navigation from './Navigation';
import Main from './Main';
import './App.css';

let usersRef = firebase.database().ref('users_list');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      data: null
    }
  }


  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
      }
    })
  }


  componentWillMount() {
    usersRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    })
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        })
      })
  }


  render() {
    return (
      <div className="sans-serif">
        <Navigation
          user={this.state.user}
          handleLogIn={this.login}
          handleLogOut={this.logout}
          />
        <Main
          data={this.state}
          />
      </div>
    );
  }
}

export default App;
