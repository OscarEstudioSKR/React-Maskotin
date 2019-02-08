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
        hambre: 0,
        calor: 0,
        infelicidad: 0,
        obesidad: 0,
        aburrimiento: 0,
        enfermedad: 0,
        inteligencia: 0,
        cansancio: 0,
        cagalera: 0,
        
        accion: "Tranquilo",
        animList: [],
        anim: 0,
        img: huevo0,
        idMenu: 0,
        nacido: true,
        dinero: 5,
      }

      let estiloMascota = {
        display: "none"
      }



      setInterval(() => { this.setState({ cont: cont,}) }, velAnimacion);
   
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
              {this.state.nacido ? <this.Navegador />:<p>Esperando a que nazca...<br />¿Tienes ya un nombre?</p>}
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

/*

        if(tipo == "Cometa"){
          this.setState({
            edad: this.state.edad,
            tam: this.state.tam+0.1,
            hambre: this.state.hambre,
            calor: this.state.calor,
            infelicidad: this.state.infelicidad,
            obesidad: this.state.obesidad,
            aburrimiento: this.state.aburrimiento,
            enfermedad: this.state.enfermedad,
            inteligencia: this.state.inteligencia,
            cansancio: this.state.cansancio,
            cagalera: this.state.cagalera,
          })
        }

 */
      let ejecutarAccion = (tipo) => {
        if(tipo == "Balón"){
          this.setState({
            tam: this.state.tam+0.1,
            hambre: this.state.hambre+20,
            calor: this.state.calor+20,
            infelicidad: this.state.infelicidad-2,
            obesidad: this.state.obesidad-1,
            aburrimiento: this.state.aburrimiento-25,
            enfermedad: this.state.enfermedad*1.2,
            cansancio: (this.state.cansancio+10)*2,
            cagalera: this.state.cagalera+5,
          })
        }
        if(tipo == "Cometa"){
          this.setState({
            hambre: this.state.hambre+5,
            calor: this.state.calor+5,
            infelicidad: this.state.infelicidad-1,
            aburrimiento: this.state.aburrimiento-10,
            inteligencia: this.state.inteligencia+0.1,
            cansancio: this.state.cansancio+15,
            cagalera: this.state.cagalera-2,
          })
        }
        if(tipo == "Libro"){
          this.setState({
            tam: this.state.tam-0.05,
            hambre: this.state.hambre+2,
            calor: this.state.calor-5,
            infelicidad: this.state.infelicidad-5,
            obesidad: this.state.obesidad+3,
            aburrimiento: this.state.aburrimiento+5,
            enfermedad: this.state.enfermedad-2,
            inteligencia: this.state.inteligencia+1,
            cansancio: this.state.cansancio+5,
            cagalera: this.state.cagalera-1,
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
            calor: this.state.calor-10,
            infelicidad: this.state.infelicidad-2,
            obesidad: this.state.obesidad+5,
            enfermedad: this.state.enfermedad+3,
            inteligencia: this.state.inteligencia-0.1,
            cansancio: 0,
            cagalera: this.state.cagalera+30,
          })
        }
        if(tipo == "Pócima azul"){
          this.setState({
            edad: this.state.edad-0.3,
            calor: this.state.calor-1,
            infelicidad: this.state.infelicidad-10,
            obesidad: this.state.obesidad-1,
            enfermedad: this.state.enfermedad+1,
            inteligencia: this.state.inteligencia-1,
            cansancio: this.state.cansancio-10,
            cagalera: 0
          })
        }
        if(tipo == "Galleta"){
          this.setState({
            tam: this.state.tam+0.1,
            hambre: this.state.hambre-60,
            calor: this.state.calor+1,
            infelicidad: this.state.infelicidad-1,
            obesidad: this.state.obesidad*1.2,
            cansancio: this.state.cansancio+1,
            cagalera: this.state.cagalera+5,
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
            cagalera: this.state.cagalera+0.1,
          })
        }
        if(tipo == "Caramelo"){
          this.setState({
            edad: this.state.edad+0.02,
            hambre: this.state.hambre-1,
            infelicidad: this.state.infelicidad-25,
            obesidad: this.state.obesidad+10,
            aburrimiento: this.state.aburrimiento-10,
            enfermedad: this.state.enfermedad+0.1,
            cagalera: this.state.cagalera+2,
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
            aburrimiento: this.state.aburrimiento+20,
            enfermedad: this.state.enfermedad+0.1,
            inteligencia: this.state.inteligencia+0.1,
            cansancio: this.state.cansancio-5,
            cagalera: this.state.cagalera+25,
          })
        }
        if(tipo == "Paz"){
          this.setState({
            calor: this.state.calor+2,
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
        this.state.nacido = true;
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