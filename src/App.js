import React, { Component } from 'react'
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { userName: 'Ramshad' },
      { userName: 'Maxmilian' }
    ]
  }

  inputChangeHandler = (event) => {
    this.setState({
      users: [
        { userName: event.target.value },
        { userName: 'Maxmilian' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput onchange={this.inputChangeHandler} value={this.state.users[0].userName}></UserInput>
        <UserOutput userName={this.state.users[0].userName}></UserOutput>
      </div>
    );
  }

}

export default App;
