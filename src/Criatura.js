import React, { Component } from 'react';

import './Criatura.css';



class Criatura extends Component {
    constructor(props){
      super(props)
      this.state = {
        nombre: "Maskotin",
        edad: 0,
        salud: 0,
        hambre: 0,
        cansancio: 0,
        felicidad: 0
      }
    }
    render() {
      return (
        <div className="Criatura">
            <h2 className="nombre-titulo">{this.state.nombre}</h2>
        </div>
      );
    }
  }

export default Criatura;