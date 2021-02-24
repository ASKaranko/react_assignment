import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {name: 'Andrei'},
      {name: 'Stepan'},
      {name: 'Anna'}
    ]
  }

  nameHandler = (event) => {
    this.setState({
      users: [
        {name: event.target.value},
        {name: 'Stepan'},
        {name: 'Anna'}
      ]
    });
  }

  render() {

    return (
      <div className="App">
        <div className="wrapper">
          <UserOutput name={this.state.users[0].name} change={this.nameHandler}/>
          <UserOutput name={this.state.users[1].name} />
          <UserOutput name={this.state.users[2].name} />
        </div>
      </div>)
  }
}

export default App;
