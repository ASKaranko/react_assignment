import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    length: 0,
    text: ''
  };

  lengthHandler = (event) => {
    const inputText = event.target.value;
    const length = inputText.length;
    this.setState({
      length: length,
      text: inputText
    });
  }

  deleteLetter = (id) => {
      const text = this.state.text;
      const textArr = text.split('');
      const letterIndex = textArr.findIndex((letter, index) => index === id);
      textArr.splice(letterIndex, 1);
      const newText = textArr.join('');
      const length = newText.length;
      this.setState({
        length: length,
        text: newText
      });
  }

  separateLetter = (string) => {
    return (
        <div>
          {string.split('').map((letter, index) => {
            return <CharComponent
                letter={letter}
                click={() => this.deleteLetter(index)}
            />
          })}
        </div>
    )
  }

  render() {

    return (
        <div>
          <input type="text" onChange={this.lengthHandler} value={this.state.text}/>
          <p>Length of text: {this.state.length}</p>
          <ValidationComponent length={this.state.length}/>
          {this.separateLetter(this.state.text)}
        </div>
        )
  }
}

export default App;
