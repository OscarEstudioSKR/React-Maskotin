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
import hambriento0 from './img/hambriento0.png';
import hambriento1 from './img/hambriento1.png';
import calor0 from './img/calor0.png';
import calor1 from './img/calor1.png';
import calor2 from './img/calor2.png';
import calor3 from './img/calor3.png';

import moneda from './img/moneda.png'
import botonMenu from './img/botonMenu.png'
import iconoFelicidad from './img/felicidad.png';
import iconoCansancio from './img/cansancio.png';
import iconoCorazon from './img/corazon.png';
import iconoManzana from './img/manzana.png';
import flecha from './img/flecha.png';
import comida1 from './img/comida1.png';
import comida2 from './img/comida2.png';
import comida3 from './img/comida3.png';
import salud1 from './img/salud1.png';
import salud2 from './img/salud2.png';
import salud3 from './img/salud3.png';
import dedo1 from './img/dedo1.png';
import dedo2 from './img/dedo2.png';
import dedo3 from './img/dedo3.png';
import diversion1 from './img/diversion1.png';
import diversion2 from './img/diversion2.png';
import diversion3 from './img/diversion3.png';
import llorar0 from './img/llorar0.png';
import llorar1 from './img/llorar1.png';
import llorar2 from './img/llorar2.png';
import llorar3 from './img/llorar3.png';
import llorar4 from './img/llorar4.png';
import aburrido0 from './img/aburrido0.png';
import aburrido1 from './img/aburrido1.png';
import enfermo0 from './img/enfermo0.png';
import enfermo1 from './img/enfermo1.png';
import dormir0 from './img/dormir0.png';
import dormir1 from './img/dormir1.png';
import dormir2 from './img/dormir2.png';
import cagando0 from './img/cagando0.png';
import cagando1 from './img/cagando1.png';
import cagando2 from './img/cagando2.png';
import cagando3 from './img/cagando3.png';
import cagando4 from './img/cagando4.png';
import cagando5 from './img/cagando5.png';

import comerGalleta0 from './img/comerGalleta0.png';
import comerGalleta1 from './img/comerGalleta1.png';
import comerGalleta2 from './img/comerGalleta2.png';
import comerGalleta3 from './img/comerGalleta3.png';
import comerGalleta4 from './img/comerGalleta4.png';


const velAnimacion = 250;
const probNacimiento = .2;

//Bucle
let cont = 0;
setInterval(() => {
  cont++;
}, velAnimacion);


class Criatura extends Component {
    constructor(props){
      super(props)
      this.state = {
        cont: 0,
        nombre: "Maskotin",

        edad: 0,
        tam: 1,
        obesidad: 0,
        inteligencia: 0,

        hambre: 0,
        calor: 0,
        infelicidad: 0,
        aburrimiento: 0,
        enfermedad: 0,
        cansancio: 0,
        cagalera: 100,
        
        accion: "Encubando huevo", //Encubando huevo/Tranquilo
        animList: [],
        anim: 0,
        img: huevo0,
        idMenu: 0,
        navAbierto: false,
        dinero: 50,
      }

      let estiloMascota = {
        display: "none"
      }



      setInterval(() => { 
        
        this.setState({ 
          cont: cont,
          edad: this.state.edad+0.0001,
          hambre: this.state.hambre+0.01,
          aburrimiento: this.state.aburrimiento+0.02,
          cansancio: this.state.accion == "Dormido" ? this.state.cansancio-0.5:this.state.cansancio+0.01,
          cagalera: this.state.accion == "Evacuando" && this.state.anim == this.state.animList.length-1 ? 0: this.state.cagalera,

        }); 
      }, velAnimacion);
   
    }
    
    render() {

      return (
        <div className="Criatura">
            <header>
              <div>
                <img src={moneda} />
                <p>{this.state.dinero}</p>
              </div>
              <button>
                <img src={botonMenu}></img>
              </button>
            </header>

            <h1>{this.state.nombre}</h1>
            <fondo><this.Animar /></fondo>
            <h2>{this.state.accion}</h2> 
            <footer>
              {this.state.navAbierto ? <this.Navegador />:<p>Esperando a que nazca...<br />¿Tienes ya un nombre?</p>}
            </footer>
            
        </div>
      );
    }

    Navegador = ()=>{
      return(
        <div>
          <this.BotonNav pos = "1"/>
          <this.BotonNav pos = "2" />
          <this.BotonNav pos = "3" />
          <this.BotonNav pos = "4" />     
        </div>
      )
    }

    BotonNav = (props)=> {
      let m = this.state.dinero;
      let pos = props.pos;
      let imaBoton = iconoFelicidad;
      var fun = "";
      let gastar = ()=> this.state.dinero --;


      if(this.state.idMenu == 0){
        if(pos==1){imaBoton = iconoFelicidad;}
        if(pos==2){imaBoton = iconoCorazon;}
        if(pos==3){imaBoton = iconoManzana;}
        if(pos==4){imaBoton = iconoCansancio;} 
        return <button className="botonAccion" onClick={()=>this.state.idMenu=pos}><img src={imaBoton}className="imaBoton"></img></button> 
      }
      if(this.state.idMenu == 1){
        if(pos==1){imaBoton = flecha; fun = ()=> this.state.idMenu=0;}
        if(pos==2){imaBoton = diversion1; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Cometa")):false}
        if(pos==3){imaBoton = diversion2; fun = ()=> m > 0 ? (gastar(),ejecutarAccion("Balón")):false}
        if(pos==4){imaBoton = diversion3; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Libro")):false}
          
      }
      if(this.state.idMenu == 2){
        if(pos==1){imaBoton = flecha; fun = ()=> this.state.idMenu=0;}
        if(pos==2){imaBoton = salud1; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Pócima verde")):false}
        if(pos==3){imaBoton = salud2; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Pócima roja")):false}
        if(pos==4){imaBoton = salud3; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Pócima azul")):false} 
      }
      if(this.state.idMenu == 3){
        if(pos==1){imaBoton = flecha; fun = ()=> this.state.idMenu=0;}
        if(pos==2){imaBoton = comida1; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Galleta")):false}
        if(pos==3){imaBoton = comida2; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Helado")):false}
        if(pos==4){imaBoton = comida3; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Caramelo")):false}  
      }
      if(this.state.idMenu == 4){
        if(pos==1){imaBoton = flecha; fun = ()=> this.state.idMenu=0;}
        if(pos==2){imaBoton = dedo1; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Ok")):false}
        if(pos==3){imaBoton = dedo2; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Mal")):false}
        if(pos==4){imaBoton = dedo3; fun = ()=> m > 0 ? (gastar(), ejecutarAccion("Paz")):false}  
      }


      let ejecutarAccion = (tipo) => {
        if(tipo == "Balón"){
          this.setState({
            tam: this.state.tam+0.1,
            hambre: this.state.hambre+40,
            calor: this.state.calor+25,
            infelicidad: this.state.infelicidad-2,
            obesidad: this.state.obesidad-1,
            aburrimiento: this.state.aburrimiento-25,
            enfermedad: this.state.enfermedad*1.2,
            cansancio: (this.state.cansancio+10)*2,
            cagalera: this.state.cagalera+10,
          })
        }
        if(tipo == "Cometa"){
          this.setState({
            hambre: this.state.hambre+15,
            calor: this.state.calor+10,
            infelicidad: this.state.infelicidad-1,
            aburrimiento: this.state.aburrimiento-10,
            inteligencia: this.state.inteligencia+0.1,
            cansancio: this.state.cansancio+20,
            cagalera: this.state.cagalera-3,
          })
        }
        if(tipo == "Libro"){
          this.setState({
            tam: this.state.tam-0.05,
            hambre: this.state.hambre+5,
            calor: this.state.calor-5,
            infelicidad: this.state.infelicidad-5,
            obesidad: this.state.obesidad+3,
            aburrimiento: this.state.aburrimiento+15,
            enfermedad: this.state.enfermedad-2,
            inteligencia: this.state.inteligencia+1,
            cansancio: this.state.cansancio+15,
            cagalera: this.state.cagalera+1,
          })
        }
        if(tipo == "Pócima verde"){
          this.setState({
            edad: this.state.edad-0.2,
            tam: this.state.tam-0.2,
            hambre: this.state.hambre+20,
            calor: this.state.calor+25,
            infelicidad: this.state.infelicidad+10,
            enfermedad: this.state.enfermedad-25,
            inteligencia: this.state.inteligencia-0.1,
            cansancio: this.state.cansancio+40,
            cagalera: this.state.cagalera+30,
          })
        }
        if(tipo == "Pócima roja"){
          this.setState({
            edad: this.state.edad+0.3,
            tam: this.state.tam+0.2,
            hambre: this.state.hambre-10,
            calor: this.state.calor-20,
            infelicidad: this.state.infelicidad-2,
            obesidad: this.state.obesidad+5,
            enfermedad: this.state.enfermedad+5,
            inteligencia: this.state.inteligencia-0.1,
            cansancio: 0,
            cagalera: this.state.cagalera+30,
          })
        }
        if(tipo == "Pócima azul"){
          this.setState({
            edad: this.state.edad-0.3,
            calor: this.state.calor-1,
            infelicidad: this.state.infelicidad-30,
            obesidad: this.state.obesidad-1,
            enfermedad: this.state.enfermedad+1,
            inteligencia: this.state.inteligencia-1,
            cansancio: this.state.cansancio-30,
            cagalera: 0
          })
        }
        if(tipo == "Galleta"){
          
          this.setState({
            accion: "Comiendo galleta",
            animList: [comerGalleta0,comerGalleta1,comerGalleta2,comerGalleta3,comerGalleta4,comerGalleta0],
            tam: this.state.tam+0.1,
            hambre: this.state.hambre-60,
            calor: this.state.calor+2,
            infelicidad: this.state.infelicidad-1,
            obesidad: this.state.obesidad*1.2,
            cansancio: this.state.cansancio+5,
            cagalera: this.state.cagalera+25,
          })
        }
        if(tipo == "Helado"){
          this.setState({
            edad: this.state.edad+0.02,
            hambre: this.state.hambre-2,
            calor: this.state.calor-30,
            infelicidad: this.state.infelicidad-5,
            obesidad: this.state.obesidad+1,
            aburrimiento: this.state.aburrimiento-2,
            enfermedad: this.state.enfermedad+1,
            cagalera: this.state.cagalera+2,
          })
        }
        if(tipo == "Caramelo"){
          this.setState({
            edad: this.state.edad+0.02,
            hambre: this.state.hambre-1,
            infelicidad: this.state.infelicidad-25,
            obesidad: this.state.obesidad+10,
            aburrimiento: this.state.aburrimiento-10,
            enfermedad: this.state.enfermedad+1,
            cagalera: this.state.cagalera+4,
          })
        }
        if(tipo == "Ok"){
          this.setState({
            calor: this.state.calor+2,
            infelicidad: this.state.infelicidad-5,
            obesidad: this.state.obesidad-0.1,
            aburrimiento: this.state.aburrimiento+1,
            inteligencia: this.state.inteligencia+0.01,
            cansancio: this.state.cansancio-5,
            cagalera: this.state.cagalera+2,
          })
        }
        if(tipo == "Mal"){
          this.setState({
            edad: this.state.edad+0.1,
            tam: this.state.tam-0.1,
            hambre: this.state.hambre-5,
            calor: this.state.calor+15,
            infelicidad: this.state.infelicidad+25,
            obesidad: this.state.obesidad-2,
            aburrimiento: this.state.aburrimiento+40,
            enfermedad: this.state.enfermedad+0.1,
            inteligencia: this.state.inteligencia+0.5,
            cansancio: this.state.cansancio-5,
            cagalera: this.state.cagalera+25,
          })
        }
        if(tipo == "Paz"){
          this.setState({
            calor: this.state.calor+5,
          })
        }


      }

      return <button className="botonAccion" onClick={fun}><img src={imaBoton}className="imaBoton"></img></button>
      

    }
    

    Animar = ()=>{

      if(this.state.accion == "Ha nacido un nuevo Maskotin" && this.state.anim == this.state.animList.length-1) {
        this.state.accion = "Tranquilo";
        this.state.anim=0;
      }  
  
      if(this.state.anim<this.state.animList.length-1){ this.state.anim ++;
      }else if(this.state.accion == "Huevo rompiendose" && this.state.anim == this.state.animList.length-1){
        this.state.animList=[idle0];
        this.state.anim=0;
        this.state.accion = "Ha nacido un nuevo Maskotin";
        this.state.edad = this.state.edad+1;
        this.state.navAbierto = true;
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
        this.state.animList= [huevoC1,huevoC2,huevoC3,huevoC3,huevoC3,huevoC3,huevoC3,huevoC3,huevoC4,huevoC4,huevoC5,huevoC6,huevoC6,huevoC7,idle0];

      }else if(this.state.accion == "Ha nacido un nuevo Maskotin"){
        this.state.animList=[idle2,idle2,idle2,idle0,idle1,idle2,idle2,idle0,idle1,idle0,idle1,idle0,idle1,idle0,idle2,idle2];


      }else if(Math.random()>0.7 && this.state.navAbierto==true){

        //Añadir estados
        if(this.state.hambre>=90){ this.cambioAccion("Hambriento", [hambriento0,hambriento1]);}
        else if(this.state.calor>=90){ this.cambioAccion("Acalorado", [calor0,calor1,calor2,calor3,]);}
        else if(this.state.infelicidad>=90){ this.cambioAccion("Triste", [llorar0,llorar1,llorar0,llorar1,llorar0,llorar1,llorar0,llorar1,llorar0,llorar2,llorar3,llorar4]);}
        else if(this.state.aburrimiento>=90){ this.cambioAccion("Aburrido", [aburrido0,aburrido1]);}
        else if(this.state.enfermedad>=90){ this.cambioAccion("Enfermo", [enfermo0,enfermo0,enfermo1,enfermo1,enfermo1]);}
        else if(this.state.cansancio>=90){ this.cambioAccion("Dormido", [dormir0,dormir0,dormir1,dormir2,dormir2]);}
        else if(this.state.cagalera>=90){ this.cambioAccion("Evacuando", [cagando0,cagando0,cagando0,cagando1,cagando0,cagando0,cagando2,cagando2,cagando2,cagando3,cagando4,cagando4,cagando5,cagando5,cagando5,cagando5,cagando4]);}
        else{this.cambioAccion("Tranquilo", [idle0,idle1,idle0,idle1,idle2]);}       
        

      
       //Quitar estados
      if(this.state.hambre<90 && this.accion=="Hambriento"){ this.cambioAccion("Tranquilo");}
      if(this.state.calor<90 && this.accion=="Acalorado"){  this.cambioAccion("Tranquilo");}
      if(this.state.infelicidad<90 && this.accion=="Triste"){  this.cambioAccion("Tranquilo");}
      if(this.state.aburrimiento<90 && this.accion=="Aburrido"){  this.cambioAccion("Tranquilo");}
      if(this.state.enfermedad<90 && this.accion=="Enfermo"){  this.cambioAccion("Tranquilo");}
      if(this.state.cansancio<90 && this.accion=="Dormido"){  this.cambioAccion("Tranquilo");}
      if(this.state.cagalera<90 && this.accion=="Evacuando"){  this.cambioAccion("Tranquilo");}
      }

      this.state.img= this.state.animList[this.state.anim];
      return <img src={this.state.img} alt= {this.state.accion} />
      
    }

    cambioAccion (tipo,arr=[idle0,idle1]){
      this.state.animList= arr;
      this.state.accion = tipo;
      //this.state.anim=0;
    }

  }

export default Criatura;