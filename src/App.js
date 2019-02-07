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
        <Cabezera />
        <Cuerpo />
        <Pie />
      </div>
    );
  }
}


export default App;

class Cabezera extends Component {
  render() {
    return (
      <div className="Cabezera">
      </div>
    );
  }
}
class Cuerpo extends Component {
  render() {
    return (
      <div className="Cuerpo">
        <Criatura />
      </div>
    );
  }
}
class Pie extends Component {
  render() {
    return (
      <div className="Pie">
      </div>
    );
  }
}