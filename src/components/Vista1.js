import React from "react";
import '../App.css';
import Header from "./Header.js";
import Footer from "./Footer.js"
import tocando from '../img/tocando.png';
export default function Vista1(){
    return(
        <React.Fragment>
            <Header />
            <div className="body">
                <p>
                    Hola Soy Juan carlos Canchachí. Mis amigos me conocen como Wayra Valentín. 
                    Soy músico, profesor y hago instrumentos. Bienvenido a mi Tienda
                </p>
                <img src={tocando} className="imagenesProfe" alt="WayraTocando" />
                <p>
                    Wayra en español significa Viento. Instrumentos andinos en los que soy especialista. 
                    También los fabrico: quenas, quenachos, toyos flautas y zampoñas. 
                    El material puede ser bambú o pbc ¿Qué esperas?
                </p>
                <button type="button" className="compra">
                    <span className="visually-hidden">¡Compra ya!</span>
                </button>    
            </div>
            <Footer />
        </React.Fragment>
    );
}