import React, { Component } from 'react';
import './App.css';

class App extends Component {
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