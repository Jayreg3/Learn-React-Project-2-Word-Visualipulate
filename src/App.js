import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField'
import Validator from './Validator/Validator'
import Char from './Char/Char'

class App extends Component {
  state = {
    inputFieldText: 'blank'
    //inputFieldTextLength: this.state.inputFieldText.length
  };

  inputChangedHandler = (event) => {
    this.setState({inputFieldText: event.target.value})
  }

  charDeleteHandler = (index) => {
    const modifiedText = [...this.state.inputFieldText];
    modifiedText.splice(index, 1);
    this.setState({inputFieldText: modifiedText.join('')})
  }

  render() {
    let isValidated = 'text long enough';
    //this.state.inputFieldTextLength < 5 ? isValidated = 'text too short' : null;
    if(this.state.inputFieldText.length < 5) {
      isValidated = 'text too short';
    }

    let charDisplay = (
      <div>
        {this.state.inputFieldText.split('').map((char, index) => {
          return <Char text={char} key={index} id={index} clicked={() => this.charDeleteHandler(index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Word Visualipulate</h1>
          <InputField
          changed={this.inputChangedHandler}
          inputFieldText={this.state.inputFieldText}/>
          <Validator isValidated={isValidated}/>
          {charDisplay}
        </header>
      </div>
    );
  }
}

export default App;
