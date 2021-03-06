import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList/FriendsList.js';
import FriendForm from './components/FriendForm/FriendForm.js';
import './App.css';

class App extends Component {
  state = {
    friends: [],
  } 

  refresh = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log('there was an error', error))
  }

  delete = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
  }
  
  render() {
    return (
      <div className="app">
        <header className="app__header">
         <h1>Friends List</h1>
        </header>
        <FriendForm  refresh={this.refresh} />
        <FriendsList friends={this.state.friends} delete={this.delete}/>
      </div>
    );
  }

  componentDidMount() {
    this.refresh();
  }
}

export default App;
