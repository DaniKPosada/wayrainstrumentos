import React from "react";
import carrito  from "../img/carrito.png";

export default function Header(){
    return(
        <div className="header">
            <h1 id="titulo">Wayra Perú</h1>
            <div className="circuloAmarillo">
                <img className="car1" src={carrito} alt=""/>
            </div>
            <div className="circuloVioleta">&nbsp;&nbsp; 4</div>
        </div>
    );
}