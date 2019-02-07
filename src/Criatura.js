import React, { Component} from 'react';
import './Criatura.css';
import idle0 from './img/idle0.png';
import idle1 from './img/idle1.png';
import idle2 from './img/idle2.png';
import huevo0 from './img/huevo0.png';
import huevo00 from './img/huevo00.png';
import huevoC1 from './img/huevoRoto1.png';
import huevoC2 from './img/huevoRoto2.png';
import huevoC3 from './img/huevoRoto3.png';
import huevoC4 from './img/huevoRoto4.png';
import huevoC5 from './img/huevoRoto5.png';
import huevoC6 from './img/huevoRoto6.png';
import huevoC7 from './img/huevoRoto7.png';



const velAnimacion = 250;
const probNacimiento = .2;

let cont = 0;
const animar = () => cont++;


//Bucle
setInterval(() => {
  animar();
}, velAnimacion);



class Criatura extends Component {
    constructor(props){
      super(props)
      this.state = {
        cont: 0,
        nombre: "Maskotin",
        edad: 0,
        tam: 1,
        accion: "Encubando huevo",
        animList: [idle0,idle2],
        anim: 0,
        img: huevo0,
      }

      let estiloMascota = {
        display: "none"
      }

      setInterval(() => {
        this.setState({ 
          cont: cont,
        });
      }, velAnimacion);

   
    }
    
    render() {

      return (
        <div className="Criatura">
            <h2>{this.state.accion}</h2>
            <fondo><this.Animar /></fondo>
            
        </div>
      );
    }

    Animar = ()=>{

      if(this.state.accion == "Naciendo" && this.state.anim == this.state.animList.length-1) {
        this.state.accion = "Tranquilo";
        this.state.anim=0;
      }  
  
      if(this.state.anim<this.state.animList.length-1){ this.state.anim ++;
      }else if(this.state.accion == "Huevo rompiendose" && this.state.anim == this.state.animList.length-1){
        this.state.animList=[idle0];
        this.state.anim=0;
        this.state.accion = "Naciendo";
        this.state.edad = this.state.edad+1;
        }else{this.state.anim = 0;}
  

      if(this.state.accion == "Encubando huevo"){
        this.state.animList= [huevo0];
        if(this.state.cont > 10){
          this.state.accion = "Dando pataditas";
          this.state.anim=0;
        }
      }
      if(this.state.accion == "Dando pataditas"){
        this.state.animList= [huevo0,huevo00];

        if(this.state.cont > 20){
          if(Math.random()>probNacimiento){
            this.state.accion = "Huevo rompiendose";
            this.state.anim=0;
          }else {
            this.setState ({edad: 0});
            this.state.accion = "Encubando huevo";
          }
        }
        
      }else if(this.state.accion == "Huevo rompiendose"){
        this.state.animList= [huevoC1,huevoC2,huevoC3,huevoC3,huevoC3,huevoC3,huevoC4,huevoC4,huevoC5,huevoC6,huevoC6,huevoC7,idle0];

      }else if(this.state.accion == "Naciendo"){
        this.state.animList=[idle2,idle2,idle2,idle0,idle1,idle2,idle2,idle0,idle1,idle0,idle1,idle0,idle1,idle0,idle2,idle2];


      }else if(this.state.accion == "Tranquilo"){
        let ran =[
          [idle0,idle1],
          [idle0,idle1,idle0,idle1,idle2],
          [idle2,idle2]
        ]
        if(Math.random()>0.7){
          this.state.anim = 0;
          let numRan = Math.floor(Math.random()*ran.length);
          this.state.animList= ran[numRan];}

      }

      this.state.img= this.state.animList[this.state.anim];
      return <img src={this.state.img} alt= {this.state.accion} />
    }

  }

export default Criatura;