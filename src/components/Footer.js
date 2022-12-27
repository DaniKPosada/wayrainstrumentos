import React from "react";

export default function Footer(){
    return(
        <React.Fragment>
        <div className="footer">
            <button type="button" className="btn inicio" aria-pressed="true">
                <span className="visually-hidden">Inicio</span>
            </button>
            <button type="button" className="btn instrumentos" aria-pressed="true">
                <span className="visually-hidden">Instrumentos</span>
            </button>
            <button type="button" className="btn carrito" aria-pressed="true">
                <span className="visually-hidden">Carrito</span>
            </button>
        </div>
    </React.Fragment>
    );

}