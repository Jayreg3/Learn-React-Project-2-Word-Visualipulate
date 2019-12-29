import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField'
import Validator from './Validator/Validator'

class App extends Component {
  state = {
    inputFieldText: 'blank',
  };

  inputChangedHandler = (event) => {
    this.setState({inputFieldText: event.target.value})
  }

  render() {
    let isValidated = 'text long enough';
    //this.state.inputFieldText.length < 5 ? isValidated = 'text too short' : null;
    if(this.state.inputFieldText.length < 5) {
      isValidated = 'text too short';
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <InputField
          changed={this.inputChangedHandler}
          inputFieldText={this.state.inputFieldText}/>
          <Validator isValidated={isValidated}/>
        </header>
      </div>
    );
  }
}

export default App;
