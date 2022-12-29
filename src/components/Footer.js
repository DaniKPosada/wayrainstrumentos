import React from "react";
import inicio from '../img/inicio.png';
import instrumentos from '../img/instrumentos.png';
import carrito from '../img/carrito.png';
export default function Footer(){
    return(
        <React.Fragment>
        <div className="footer">
            <button type="button" className="btn" aria-pressed="true">
                <img className="inicio" src={inicio} alt=""/>
                <span className="textoboton"><br></br>Inicio</span>   
            </button>
            <button type="button" className="btn instru" aria-pressed="true">
            <img className="instrumentos" src={instrumentos} alt=""/>
                <span className="textoboton"><br></br>Instrumentos</span>
            </button>
            <button type="button" className="btn car" aria-pressed="true">
            <img className="car" src={carrito} alt=""/>
                <span className="textoboton">Carrito</span>
            </button>
        </div>
    </React.Fragment>
    );

}