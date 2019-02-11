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
import cagando6 from './img/cagando6.png';
import cagando7 from './img/cagando7.png';
import cagando8 from './img/cagando8.png';
import cagando9 from './img/cagando9.png';
import cagando10 from './img/cagando10.png';
import comerGalleta0 from './img/comerGalleta0.png';
import comerGalleta1 from './img/comerGalleta1.png';
import comerGalleta2 from './img/comerGalleta2.png';
import comerGalleta3 from './img/comerGalleta3.png';
import comerGalleta4 from './img/comerGalleta4.png';
import comiendoCaramelo0 from './img/comiendoCaramelo0.png';
import comiendoCaramelo1 from './img/comiendoCaramelo1.png';
import comiendoCaramelo2 from './img/comiendoCaramelo2.png';
import comiendoCaramelo3 from './img/comiendoCaramelo3.png';
import comiendoCaramelo4 from './img/comiendoCaramelo4.png';
import comiendoCaramelo5 from './img/comiendoCaramelo5.png';
import comiendoCaramelo6 from './img/comiendoCaramelo6.png';
import comerHelado0 from './img/comerHelado1.png';
import comerHelado1 from './img/comerHelado1.png';
import comerHelado2 from './img/comerHelado2.png';
import comerHelado3 from './img/comerHelado3.png';
import comerHelado4 from './img/comerHelado4.png';
import comerHelado5 from './img/comerHelado5.png';
import medicinaAzul0 from './img/medicinaAzul0.png';
import medicinaAzul1 from './img/medicinaAzul1.png';
import medicinaAzul2 from './img/medicinaAzul2.png';
import medicinaAzul3 from './img/medicinaAzul3.png';
import medicinaAzul4 from './img/medicinaAzul4.png';
import medicinaAzul5 from './img/medicinaAzul5.png';
import medicinaAzul6 from './img/medicinaAzul6.png';
import medicinaAzul7 from './img/medicinaAzul7.png';
import medicinaVerde0 from './img/medicinaVerde0.png';
import medicinaVerde1 from './img/medicinaVerde1.png';
import medicinaVerde2 from './img/medicinaVerde2.png';
import medicinaVerde3 from './img/medicinaVerde3.png';
import medicinaVerde4 from './img/medicinaVerde4.png';
import medicinaVerde5 from './img/medicinaVerde5.png';
import medicinaVerde6 from './img/medicinaVerde6.png';
import medicinaVerde7 from './img/medicinaVerde7.png';
import medicinaRoja0 from './img/medicinaRoja0.png';
import medicinaRoja1 from './img/medicinaRoja1.png';
import medicinaRoja2 from './img/medicinaRoja2.png';
import medicinaRoja3 from './img/medicinaRoja3.png';
import medicinaRoja4 from './img/medicinaRoja4.png';
import medicinaRoja5 from './img/medicinaRoja5.png';
import medicinaRoja6 from './img/medicinaRoja6.png';
import cometa0 from './img/cometa0.png';
import cometa1 from './img/cometa1.png';
import cometa2 from './img/cometa2.png';
import cometa3 from './img/cometa3.png';
import cometa4 from './img/cometa4.png';
import jugarPelota0 from './img/jugarPelota0.png';
import jugarPelota1 from './img/jugarPelota1.png';
import jugarPelota2 from './img/jugarPelota2.png';
import jugarPelota3 from './img/jugarPelota3.png';
import jugarPelota4 from './img/jugarPelota4.png';
import jugarPelota5 from './img/jugarPelota5.png';
import jugarPelota6 from './img/jugarPelota6.png';
import jugarPelota7 from './img/jugarPelota7.png';
import jugarPelota8 from './img/jugarPelota8.png';
import jugarPelota9 from './img/jugarPelota9.png';
import jugarPelota10 from './img/jugarPelota10.png';
import leerLibro0 from './img/leerLibro0.png';
import leerLibro1 from './img/leerLibro1.png';
import leerLibro2 from './img/leerLibro2.png';
import leerLibro3 from './img/leerLibro3.png';
import represalia0 from './img/represalia0.png';
import represalia1 from './img/represalia1.png';
import represalia2 from './img/represalia2.png';
import represalia3 from './img/represalia3.png';
import recibiendoAmor0 from './img/recibiendoAmor0.png';
import recibiendoAmor1 from './img/recibiendoAmor1.png';
import recibiendoAmor2 from './img/recibiendoAmor2.png';
import recibiendoAmor3 from './img/recibiendoAmor3.png';
import respuestaNoEntender0 from './img/respuestaNoEntender0.png';
import respuestaNoEntender1 from './img/respuestaNoEntender1.png';
import respuestaHelado0 from './img/respuestaHelado0.png';
import respuestaHelado1 from './img/respuestaHelado1.png';
import respuestaPelota0 from './img/respuestaPelota0.png';
import respuestaPelota1 from './img/respuestaPelota1.png';
import respuestaCaramelo0 from './img/respuestaCaramelo0.png';
import respuestaCaramelo1 from './img/respuestaCaramelo1.png';
import respuestaGalleta0 from './img/respuestaCaramelo0.png';
import respuestaGalleta1 from './img/respuestaCaramelo1.png';
import respuestaCometa0 from './img/respuestaCometa0.png';
import respuestaCometa1 from './img/respuestaCometa1.png';
import respuestaMedicina0 from './img/respuestaMedicina0.png';
import respuestaMedicina1 from './img/respuestaMedicina1.png';
import respuestaLeer0 from './img/respuestaLeer0.png';
import respuestaLeer1 from './img/respuestaLeer1.png';


const velAnimacion = 250;  //ms
const probNacimiento = .2;
var menuAbierto = false;

const styleImg = {
  height: '31.35vh',
  width: 55,
  padding: '4vh',
}


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
        mensajeInicial: <p>Esperando a que nazca...<br />¿Tienes ya un nombre?</p>,
        nombre: "Maskotin",

        edad: 0,
        tam: 0,
        tamPlus: 0,
        obesidad: 0,
        inteligencia: 0,

        hambre: 50,
        calor: 50,
        infelicidad: 50,
        aburrimiento: 50,
        enfermedad: 50,
        cansancio: 50,
        cagalera: 50,
        
        accion: "Encubando huevo", //Encubando huevo/Tranquilo
        animList: [],
        anim: 0,
        img: huevo0,
        idMenu: 0,
        navAbierto: false,
        dinero: 10,
      }


      setInterval(() => { 

        console.log(["Tamaño: "+this.state.tam,"Hambre: "+this.state.hambre,"Enfermedad: "+this.state.enfermedad,
        "Aburrimiento: "+this.state.aburrimiento, "Obesidad: "+this.state.obesidad, "Inteligencia: "+this.state.inteligencia, "Calor: "+this.state.calor,
        "Infelicidad: "+this.state.infelicidad,"Cansancio: "+this.state.cansancio,"Cagalera: "+this.state.cagalera,"Edad: "+this.state.edad]);
        
        this.setState({ 
          cont: cont,
          dinero: this.state.accion == "Tranquilo" ? this.state.dinero+0.02:this.state.dinero+0.0005,

          //Minimos y maximos + cambios constantes
          tam: this.state.tam<0 ? 0: this.state.tam>70 ? 70:this.state.tamPlus+(this.state.edad/100),
          edad: this.state.edad<0 ? 0: this.state.edad+0.01,
          obesidad: this.state.obesidad<0 ? 0: this.state.obesidad>100 ? 100:this.state.obesidad,
          inteligencia: this.state.inteligencia<0 ? 0: this.state.inteligencia>100 ? 100:this.state.inteligencia,
          hambre: this.state.hambre<0 ? 0:this.state.hambre>100 ? 100: this.state.hambre+0.03,
          calor: this.state.calor<0 ? 0:this.state.calor>100 ? 100:this.state.calor,
          infelicidad: this.state.infelicidad<0 ? 0:this.state.infelicidad>100 ? 100:this.state.infelicidad+0.01,
          aburrimiento: this.state.aburrimiento<0 ? 0:this.state.aburrimiento>100 ? 100: this.state.aburrimiento+0.2,
          enfermedad: this.state.enfermedad<0 ? 0:this.state.enfermedad>100 ? 100:this.state.accion == "Dormido" ? this.state.enfermedad-0.001:this.state.enfermedad+0.01,
          cagalera: this.state.cagalera<0 ? 0:this.state.cagalera>100 ? 100:this.state.accion == "Evacuando" && this.state.anim == this.state.animList.length-1 ? 0: this.state.cagalera,
          cansancio: this.state.cansancio>100 ? 100 : this.state.cansancio<0 ? 0: this.state.accion == "Dormido" ? this.state.cansancio>20 ? this.state.cansancio-3 : this.state.cansancio+(this.state.obesidad/100)+0.05 : this.state.cansancio+(this.state.obesidad/100)+0.05,

        }); 
      }, velAnimacion);
   
    }
    reiniciar(){
      this.setState({ 
        cont: 0,
        mensajeInicial: <p>Esperando a que nazca...<br />Quizas esta vez...</p>,
        nombre: "Maskotin",
        edad: 0,
        tam: 0,
        tamPlus: 0,
        obesidad: 0,
        inteligencia: 0,
        hambre: 50,
        calor: 50,
        infelicidad: 50,
        aburrimiento: 50,
        enfermedad: 50,
        cansancio: 50,
        cagalera: 50, 
        accion: "Encubando huevo",
        animList: [],
        anim: 0,
        img: huevo0,
        idMenu: 0,
        navAbierto: false,
        dinero: 10,
      })
      menuAbierto = false
    }
    render() {

      return (
        <div className="Criatura">
          {menuAbierto && 
          <nav className = "menu-options">
            <button onClick={()=>{menuAbierto=!menuAbierto;}} className="boton-menuP botonSuperior abierto">
                <img src={botonMenu} style={{alignSelf: 'flex-end'}}></img>
            </button>
            <div className="opc">
              <button onClick={()=>{this.reiniciar()}} className="boton-menuP abierto">Reiniciar</button>
              <button onClick={()=>{menuAbierto=!menuAbierto;}} className="boton-menuP abierto">Guardar</button>
              <button onClick={()=>{menuAbierto=!menuAbierto;}} className="boton-menuP abierto">Continuar</button>
            </div>
            
          </nav>}
          <header>
              
            <div>
              <img src={moneda} />
              <p>{this.state.accion=="Tranquilo" ? Math.floor(this.state.dinero)+"^":Math.floor(this.state.dinero)}</p>
            </div>
              
            <button onClick={()=>{menuAbierto=!menuAbierto;}} className="boton-menuP">
              <img src={botonMenu}></img>
            </button>
          </header>

          <h1 ><input name="nombre" placeholder={this.state.nombre}></input></h1>
          <fondo><this.Animar /></fondo>
          <h2>{this.state.accion}</h2> 
          <footer>
            {this.state.navAbierto ? <this.Navegador />:this.state.mensajeInicial}
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
        if(pos==2){imaBoton = diversion1; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Cometa")):false}
        if(pos==3){imaBoton = diversion2; fun = ()=> m > 1 ? (gastar(),ejecutarAccion("Balón")):false}
        if(pos==4){imaBoton = diversion3; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Libro")):false}      
      }
      if(this.state.idMenu == 2){
        if(pos==1){imaBoton = flecha; fun = ()=> this.state.idMenu=0;}
        if(pos==2){imaBoton = salud1; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Pócima verde")):false}
        if(pos==3){imaBoton = salud2; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Pócima roja")):false}
        if(pos==4){imaBoton = salud3; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Pócima azul")):false} 
      }
      if(this.state.idMenu == 3){
        if(pos==1){imaBoton = flecha; fun = ()=> this.state.idMenu=0;}
        if(pos==2){imaBoton = comida1; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Galleta")):false}
        if(pos==3){imaBoton = comida2; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Helado")):false}
        if(pos==4){imaBoton = comida3; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Caramelo")):false}  
      }
      if(this.state.idMenu == 4){
        if(pos==1){imaBoton = flecha; fun = ()=> this.state.idMenu=0;}
        if(pos==2){imaBoton = dedo1; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Preguntar")):false}
        if(pos==3){imaBoton = dedo2; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Represalia")):false}
        if(pos==4){imaBoton = dedo3; fun = ()=> m > 1 ? (gastar(), ejecutarAccion("Mimos")):false}  
      }

      var ejecutarAccion2 = (accionT, arrT) => {
        this.setState({
          accion: accionT,
          animList: arrT,
          navAbierto: false,
          anim:0,
        })
      }

      let ejecutarAccion = (tipo) => {
       
        if(tipo == "Balón"){
          ejecutarAccion2("Jugando con pelota",[jugarPelota0,jugarPelota1,jugarPelota2,jugarPelota3,jugarPelota4,jugarPelota5,jugarPelota6,jugarPelota7,jugarPelota8,jugarPelota9,jugarPelota10,jugarPelota10]);
          this.setState({
            mensajeInicial: <p>Gran tiro!!<br />Pero no podras vencer</p>,
            tamPlus: this.state.tamPlus+0.1,
            hambre: this.state.hambre+40,
            calor: this.state.calor+25,
            infelicidad: this.state.infelicidad-2,
            obesidad: this.state.obesidad-5,
            aburrimiento: this.state.aburrimiento-50,
            enfermedad: this.state.enfermedad*1.2,
            cansancio: this.state.cansancio+35,
            cagalera: this.state.cagalera+10,
          })
        }
        if(tipo == "Cometa"){
          ejecutarAccion2("Jugando con cometa",[cometa0,cometa0,cometa1,cometa2,cometa3,cometa4,cometa0,cometa0,cometa1,cometa2,cometa3,cometa4,cometa0,cometa0,cometa1,cometa2,cometa3,cometa4,cometa0,cometa0]);
          this.setState({       
            mensajeInicial: <p>Salto, salto...<br />Con mi cometa!!</p>,
            hambre: this.state.hambre+15,
            calor: this.state.calor+10,
            infelicidad: this.state.infelicidad-1,
            obesidad: this.state.obesidad-1,
            aburrimiento: this.state.aburrimiento-30,
            inteligencia: this.state.inteligencia+0.1,
            cansancio: this.state.cansancio+20,
            cagalera: this.state.cagalera-3,
          })
        }
        if(tipo == "Libro"){
          ejecutarAccion2("Leyendo un cuento",[leerLibro0,leerLibro0,leerLibro1,leerLibro2,leerLibro2,leerLibro2,leerLibro1,leerLibro1,leerLibro1,leerLibro2,leerLibro3,leerLibro3,leerLibro3,leerLibro2,leerLibro1,leerLibro1,leerLibro3,leerLibro3,leerLibro1,leerLibro1,leerLibro0,leerLibro0]);
          this.setState({
            mensajeInicial: <p>¿Y que es un gorila?<br />¿Yo soy un gorila?</p>,
            tamPlus: this.state.tamPlus+0.05,
            hambre: this.state.hambre+5,
            calor: this.state.calor-5,
            infelicidad: this.state.infelicidad-5,
            obesidad: this.state.obesidad+1,
            aburrimiento: this.state.aburrimiento-5,
            enfermedad: this.state.enfermedad-1,
            inteligencia: this.state.inteligencia+1,
            cansancio: this.state.cansancio+15,
            cagalera: this.state.cagalera+1,
          })
        }
        if(tipo == "Pócima verde"){
          ejecutarAccion2("Tomando medicina verde",[medicinaVerde0,medicinaVerde1,medicinaVerde2,medicinaVerde3,medicinaVerde4,medicinaVerde4,medicinaVerde5,medicinaVerde6,medicinaVerde6,medicinaVerde7]);
          this.setState({
            mensajeInicial: <p>Por favor...<br />¡REPUGNANTE!</p>,
            edad: this.state.edad-0.2,
            tamPlus: this.state.tamPlus-0.2,
            hambre: this.state.hambre+20,
            calor: this.state.calor+25,
            infelicidad: this.state.infelicidad+20,
            enfermedad: this.state.enfermedad-30,
            inteligencia: this.state.inteligencia-0.1,
            cansancio: this.state.cansancio+40,
            cagalera: this.state.cagalera+30,
          })
        }
        if(tipo == "Pócima roja"){
          ejecutarAccion2("Tomando medicina roja",[medicinaRoja0,medicinaRoja1,medicinaRoja1,medicinaRoja2,medicinaRoja3,medicinaRoja4,medicinaRoja5,medicinaRoja6,medicinaRoja5,medicinaRoja3,medicinaRoja3,medicinaRoja3,medicinaRoja3,medicinaRoja3,medicinaRoja3,medicinaRoja3,medicinaRoja3,medicinaRoja3]);
          this.setState({
            mensajeInicial: <p>UUUUYYYY!!!<br />Que extraña sensación!</p>,
            edad: this.state.edad+5,
            tamPlus: this.state.tamPlus+1,
            hambre: this.state.hambre-10,
            calor: this.state.calor-20,
            infelicidad: this.state.infelicidad+10,
            obesidad: this.state.obesidad+5,
            enfermedad: this.state.enfermedad+5,
            inteligencia: this.state.inteligencia-0.1,
            cansancio: 0,
            cagalera: this.state.cagalera+30,
          })
        }
        if(tipo == "Pócima azul"){
          ejecutarAccion2("Tomando medicina azul",[medicinaAzul0,medicinaAzul1,medicinaAzul2,medicinaAzul3,medicinaAzul4,medicinaAzul5,medicinaAzul6,medicinaAzul4,medicinaAzul7,medicinaAzul7]);
          this.setState({
            mensajeInicial: <p>!!!BUAG!!!<br />¡¿Que será esto?!</p>,
            edad: this.state.edad-10,
            calor: this.state.calor-1,
            infelicidad: this.state.infelicidad-30,
            obesidad: this.state.obesidad-2,
            enfermedad: this.state.enfermedad+1,
            inteligencia: this.state.inteligencia+0.5,
            cansancio: this.state.cansancio-30,
            cagalera: 0
          })
        }
        if(tipo == "Galleta"){
          ejecutarAccion2("Comiendo galleta",[comerGalleta0,comerGalleta1,comerGalleta2,comerGalleta3,comerGalleta4,comerGalleta4]);
          this.setState({
            mensajeInicial: <p>!!!GALLETAS!!!<br />¡Ricas galletas!</p>,
            tamPlus: this.state.tamPlus+0.3,
            hambre: this.state.hambre-60,
            calor: this.state.calor+2,
            infelicidad: this.state.infelicidad-1,
            obesidad: 2+(this.state.obesidad*1.2),
            cansancio: this.state.cansancio+5,
            cagalera: this.state.cagalera+25,
          })
        }
        if(tipo == "Helado"){
          ejecutarAccion2("Comiendo helado",[comerHelado0,comerHelado1,comerHelado2,comerHelado3,comerHelado4,comerHelado5,comerHelado5]);
          this.setState({
            mensajeInicial: <p>!Fresquito!<br />¡Muy fresquito!</p>,
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
          ejecutarAccion2("Comiendo caramelo",[comiendoCaramelo0,comiendoCaramelo1,comiendoCaramelo2,comiendoCaramelo3,comiendoCaramelo4,comiendoCaramelo5,comiendoCaramelo6,comiendoCaramelo6]);
          this.setState({
            mensajeInicial: <p>!¿Un caramelo?!<br />¡UN CARAMELOOO!</p>,
            edad: this.state.edad+0.02,
            hambre: this.state.hambre-1,
            infelicidad: this.state.infelicidad-25,
            obesidad: this.state.obesidad+5,
            aburrimiento: this.state.aburrimiento-10,
            enfermedad: this.state.enfermedad+5,
            cagalera: this.state.cagalera+4,
          })
        }
        if(tipo == "Preguntar"){
          let ran = Math.floor(Math.random()*4);
          if(this.state.inteligencia > Math.floor(Math.random()*5)){

            switch(ran){
              case 0: 
                if(this.state.calor>40){
                  ejecutarAccion2("Comunicándose",[respuestaHelado0,respuestaHelado1,respuestaHelado0,respuestaHelado1,respuestaHelado0,respuestaHelado1,respuestaHelado0,respuestaHelado1,respuestaHelado0,respuestaHelado1]);
                  this.setState({mensajeInicial: <p>¡Siiii! ¡Quiero!<br />¡¡¡Helado!!!</p>,});}
                else{
                  ejecutarAccion2("Comunicándose",[respuestaCometa0,respuestaCometa1,respuestaCometa0,respuestaCometa1,respuestaCometa0,respuestaCometa1,respuestaCometa0,respuestaCometa1,respuestaCometa0,respuestaCometa1]);
                  this.setState({mensajeInicial: <p>Saltemos<br />con la cometa!!!</p>,});}
                break;
              case 1: 
                if(this.state.infelicidad>40){
                  ejecutarAccion2("Comunicándose",[respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1]);
                  this.setState({mensajeInicial: <p>¡Siiii! ¡Quiero!<br />¡¡¡Caramelo!!!</p>,});}
                else{
                  ejecutarAccion2("Comunicándose",[respuestaGalleta0,respuestaGalleta1,respuestaGalleta0,respuestaGalleta1,respuestaGalleta0,respuestaGalleta1,respuestaGalleta0,respuestaGalleta1,respuestaGalleta0,respuestaGalleta1]);
                  this.setState({mensajeInicial: <p>¡¡Comer!!<br />Comer y crecer</p>,});}
                break;
              case 2: 
                if(this.state.obesidad>40){
                  ejecutarAccion2("Comunicándose",[respuestaPelota0,respuestaPelota1,respuestaPelota0,respuestaPelota1,respuestaPelota0,respuestaPelota1,respuestaPelota0,respuestaPelota1,respuestaPelota0,respuestaPelota1]);
                  this.setState({mensajeInicial: <p>¡¡¡Juguemos<br />a la pelota!!!</p>,});}
                else{
                  ejecutarAccion2("Comunicándose",[respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1,respuestaCaramelo0,respuestaCaramelo1]);
                  this.setState({mensajeInicial: <p>¡Siiii! ¡Quiero!<br />¡¡¡Caramelo!!!</p>,});}
                break; 
              case 3: 
                if(this.state.enfermedad>40){
                  ejecutarAccion2("Comunicándose",[respuestaMedicina0,respuestaMedicina1,respuestaMedicina0,respuestaMedicina1,respuestaMedicina0,respuestaMedicina1,respuestaMedicina0,respuestaMedicina1,respuestaMedicina0,respuestaMedicina1]);
                  this.setState({mensajeInicial: <p>No muy bien<br />¡Yo malito!</p>,});}
                else{
                  ejecutarAccion2("Comunicándose",[respuestaLeer0,respuestaLeer1,respuestaLeer0,respuestaLeer1,respuestaLeer0,respuestaLeer1,respuestaLeer0,respuestaLeer1,respuestaLeer0,respuestaLeer1]);
                  this.setState({mensajeInicial: <p>¡Leamos!<br />me gusta aprender</p>,});}
                break;
              default:
                ejecutarAccion2("Comunicándose",[respuestaNoEntender0,respuestaNoEntender1,respuestaNoEntender0,respuestaNoEntender1,respuestaNoEntender0,respuestaNoEntender1,respuestaNoEntender0,respuestaNoEntender1]);
                this.setState({mensajeInicial: <p>¡No entiendo!<br />{this.state.nombre} no tan listo</p>});
                break;
            }
          }else{
            ejecutarAccion2("Comunicándose",[respuestaNoEntender0,respuestaNoEntender1,respuestaNoEntender0,respuestaNoEntender1,respuestaNoEntender0,respuestaNoEntender1,respuestaNoEntender0,respuestaNoEntender1]);
            this.setState({mensajeInicial: <p>¡No entiendo!<br />{this.state.nombre} no tan listo</p>});
          }
          
          this.setState({
            
            calor: this.state.calor+2,
            infelicidad: this.state.infelicidad-2,
            aburrimiento: this.state.aburrimiento+3,
            inteligencia: this.state.inteligencia+0.1,
            cansancio: this.state.cansancio+5,
            cagalera: this.state.cagalera+2,
          })
        }

        if(tipo == "Represalia"){
          ejecutarAccion2("Recibiendo represalia",[represalia0,represalia1,represalia0,represalia1,represalia2,represalia0,represalia1,represalia3,represalia3,represalia0,represalia1,represalia0,represalia1,represalia2]);
          this.setState({
            mensajeInicial: <p>¡Esta bien!<br />Me portaré mejor...</p>,
            edad: this.state.edad+1,
            tamPlus: this.state.tamPlus-0.1,
            hambre: this.state.hambre-5,
            calor: this.state.calor+15,
            infelicidad: this.state.infelicidad+25,
            obesidad: this.state.obesidad-4,
            aburrimiento: this.state.aburrimiento+40,
            enfermedad: this.state.enfermedad+0.1,
            inteligencia: this.state.inteligencia+1,
            cansancio: this.state.cansancio-10,
            cagalera: this.state.cagalera+25,
          })
        }
        if(tipo == "Mimos"){
          ejecutarAccion2("Recibiendo mimos",[recibiendoAmor0,recibiendoAmor1,recibiendoAmor2,recibiendoAmor3,recibiendoAmor0,recibiendoAmor1,recibiendoAmor2,recibiendoAmor3,recibiendoAmor0,recibiendoAmor1,recibiendoAmor2,recibiendoAmor3]);
          this.setState({
            mensajeInicial: <p>¡¡Besos si!!<br />Quiero más besos</p>,
            calor: this.state.calor+5,
            infelicidad: this.state.infelicidad-10,
            hambre: this.state.hambre-5,
            obesidad: this.state.obesidad+2,
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


      }else if(this.state.navAbierto==true){

        //Añadir estados
        
        if(this.state.accion != "Dormido"){
          if(this.state.cagalera>=90){ this.state.tamPlus -=0.01; this.cambioAccion("Evacuando", [cagando0,cagando0,cagando0,cagando1,cagando0,cagando0,cagando2,cagando2,cagando2,cagando3,cagando4,cagando4,cagando5,cagando5,cagando5,cagando5,cagando4,cagando5,cagando6,cagando7,cagando8,cagando9,cagando10,cagando9,cagando10,cagando9,cagando10,cagando9,cagando10,cagando9]);}
          else if(this.state.calor>=90){ this.cambioAccion("Acalorado", [calor0,calor1,calor2,calor3]);}
          else if(this.state.cansancio>=90){ this.cambioAccion("Dormido", [dormir0,dormir0,dormir1,dormir2,dormir2]);}
          else if(this.state.enfermedad>=90){ this.state.cansancio += 1; this.state.cagalera +=0.5; this.cambioAccion("Enfermo", [enfermo0,enfermo0,enfermo1,enfermo1,enfermo1]);}
          else if(this.state.hambre>=90){ this.state.infelicidad +=1; this.cambioAccion("Hambriento", [hambriento0,hambriento1]);}
          else if(this.state.infelicidad>=90){ this.cambioAccion("Triste", [llorar0,llorar1,llorar0,llorar1,llorar0,llorar1,llorar0,llorar1,llorar0,llorar2,llorar3,llorar4]);}
          else if(this.state.aburrimiento>=90){ this.state.infelicidad +=1; this.cambioAccion("Aburrido", [aburrido0,aburrido1]);}       
        }

        //Quitar estados
        if(this.state.cansancio<20 && this.state.accion=="Dormido"){  this.cambioAccion();}
        else if(this.state.hambre<50 && this.state.accion=="Hambriento"){ this.cambioAccion();}
        else if(this.state.calor<50 && this.state.accion=="Acalorado"){  this.cambioAccion();}
        else if(this.state.infelicidad<50 && this.state.accion=="Triste"){  this.cambioAccion();}
        else if(this.state.aburrimiento<60 && this.state.accion=="Aburrido"){  this.cambioAccion();}
        else if(this.state.enfermedad<50 && this.state.accion=="Enfermo"){  this.cambioAccion();}
        else if(this.state.cagalera<50 && this.state.accion=="Evacuando"){  this.cambioAccion();}
      }

      //Acciones que bloquean la pantalla
      let a = this.state.accion;
      if((a=="Comiendo galleta" || a=="Comiendo caramelo"|| a=="Comiendo helado" || a=="Tomando medicina azul"|| a=="Tomando medicina verde"|| a=="Tomando medicina roja"
      || a=="Jugando con cometa"|| a=="Jugando con pelota"|| a=="Leyendo un cuento"|| a=="Recibiendo represalia"|| a=="Recibiendo mimos"|| a=="Comunicándose")
      && this.state.anim == this.state.animList.length-1){ this.state.navAbierto=true; this.cambioAccion();this.state.anim=0; }

      this.state.img= this.state.animList[this.state.anim];
      return <img  style={{width: styleImg.width*(1+((this.state.tam/100)))+"%", padding: styleImg.padding, margin: (-((7*this.state.tam)/100))+"vh"}} src={this.state.img} alt= {this.state.accion} />
      
    }

    cambioAccion (tipo="Tranquilo",arr=[idle0,idle1,idle0,idle1,idle2]){
      if(this.state.anim > arr.length-1){this.state.anim =  0;}
      this.state.accion = tipo;
      this.state.animList= arr;
    }

  }

export default Criatura;