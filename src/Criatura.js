import React, { Component} from 'react';
import './Criatura.css';
import idle0 from './img/idle0.png';
import idle1 from './img/idle1.png';
import idle2 from './img/idle2.png';
import huevo0 from './img/huevo0.png';
import huevo00 from './img/huevo00.png';
import { SyncLoopHook } from 'tapable';
import huevoC1 from './img/huevoRoto1.png';
import huevoC2 from './img/huevoRoto2.png';
import huevoC3 from './img/huevoRoto3.png';
import huevoC4 from './img/huevoRoto4.png';
import huevoC5 from './img/huevoRoto5.png';
import huevoC6 from './img/huevoRoto6.png';
import huevoC7 from './img/huevoRoto7.png';



const velAnimacion = 250;
const probNacimiento = .2;

const maskotin = {
  nombre: "Maskotin",
  edad: 0,
  tam: 1,
  accion: "Encubando huevo",
  animList: [idle0,idle2],
  anim: 0,
  img: huevo0,
  animacion: function(){

    if(this.accion == "Naciendo" && this.anim == this.animList.length-1) {
      this.accion = "Tranquilo";
      maskotin.anim=0;
    }  

    if(this.anim<this.animList.length-1){ this.anim ++;
    }else if(this.accion == "Huevo rompiendose" && this.anim == this.animList.length-1){
      this.animList=[idle0];
      this.anim=0;
      this.accion = "Naciendo";
      this.edad = this.edad+1;
      }else{this.anim = 0;}





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
            <h2>{maskotin.accion}</h2>
            <fondo><this.Animar /></fondo>
            
        </div>
      );
    }

    Animar = ()=>{
      if(maskotin.accion == "Encubando huevo"){
        maskotin.animList= [huevo0];
        if(this.state.edad > 10){
          maskotin.accion = "Dando pataditas";
          maskotin.anim=0;
        }
      }
      if(maskotin.accion == "Dando pataditas"){
        maskotin.animList= [huevo0,huevo00];

        if(this.state.edad > 20){
          if(Math.random()>probNacimiento){
          maskotin.accion = "Huevo rompiendose";
          maskotin.anim=0;
          }else {
            this.setState ({edad: 0});
            maskotin.accion = "Encubando huevo";
          }
        }
        
      }else if(maskotin.accion == "Huevo rompiendose"){
        maskotin.animList= [huevoC1,huevoC2,huevoC3,huevoC3,huevoC3,huevoC3,huevoC4,huevoC4,huevoC5,huevoC6,huevoC6,huevoC7,idle0];

      }else if(maskotin.accion == "Naciendo"){
        maskotin.animList=[idle2,idle2,idle2,idle0,idle1,idle2,idle2,idle0,idle1,idle0,idle1,idle0,idle1,idle0,idle2,idle2];


      }else if(maskotin.accion == "Tranquilo"){
        let ran =[
          [idle0,idle1],
          [idle0,idle1,idle0,idle1,idle2],
        ]
        maskotin.animList= ran[Math.floor(Math.random()*ran.length)];

      }
      return <img src={maskotin.img} alt= {maskotin.accion} />
    }

  }

export default Criatura;