import React from "react";
import inicio from '../img/inicio.png';
import instrumentos from '../img/instrumentos.png';
import carrito from '../img/carrito.png';
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <React.Fragment>
        <div className="footer">
            <button type="button" className="btn" aria-pressed="true">
                <Link to="/">
                <img className="inicio" src={inicio} alt=""/>
                <span className="textoboton"><br></br>Inicio</span>  
                </Link> 
            </button>
            <button  type="button" className="btn instru" aria-pressed="true">
            <Link to="/Vista2">
            <img className="instrumentos" src={instrumentos} alt=""/>
                <span className="textoboton"><br></br>Instrumentos</span>
            </Link>
            </button>
            <button type="button" className="btn car" aria-pressed="true">
            <Link to="/Vista3">
            <img className="car" src={carrito} alt=""/>
                <span className="textoboton">Carrito</span>
            </Link>
            </button>
        </div>
    </React.Fragment>
    );

}