import React, { Component } from 'react';
import './App.css';
import Criatura from './Criatura.js';

class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div className="App">
        <Criatura />
      </div>
    );
  }
}

export default App;

