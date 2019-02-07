import React, { Component} from 'react';
import './Criatura.css';
import idle0 from './img/idle0.png';
import idle1 from './img/idle1.png';
import idle2 from './img/idle2.png';
import huevo0 from './img/huevo0.png';
import huevo00 from './img/huevo00.png';
import { SyncLoopHook } from 'tapable';

const velAnimacion = 250;

const maskotin = {
  nombre: "Maskotin",
  edad: 0,
  accion: "Encubando huevo",
  animList: [idle0,idle2],
  anim: 0,
  img: huevo0,
  animacion: function(){
    this.anim<this.animList.length-1 ? this.anim ++:this.anim = 0;
    this.img= this.animList[this.anim];
  },

}

//Bucle
setInterval(() => {
  maskotin.animacion();
}, velAnimacion);



class Criatura extends Component {
    constructor(props){
      super(props)
      this.state = {
        edad: 0
      }

      setInterval(() => {
        this.setState({ 
          edad: this.state.edad+1,
        });
        console.log("Edad: "+this.state.edad);
      }, velAnimacion);

   
    }
    
    render() {

      return (
        <div className="Criatura">
            <h2 className="nombre-titulo">{maskotin.nombre}</h2>
            <this.Animar />
        </div>
      );
    }

    Animar = ()=>{
      if(maskotin.accion == "Encubando huevo"){
        maskotin.animList= [huevo0,huevo00];

        if(this.state.edad > 10){
          maskotin.accion = "Naciendo";
        }

        

      }else if(maskotin.accion == "Naciendo"){
        maskotin.animList= [idle0,idle1,idle2];

      }
      return <img src={maskotin.img} alt= {maskotin.accion} />
    }

  }

export default Criatura;