import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js"
import './Vista3.css';
import CardGrande from "./CardGrande.js";
export default function Vista3(){

    return(
        <React.Fragment>
            <Header />
            <div className="tituloV3">
                Carrito
            </div>
            <CardGrande />  
            <button type="button" className="continua">
                    <span className="visually-hidden">Continuar</span>
                    <span className="visually-hidden">$ 480.000</span>
                </button> 
            <div className="mwa">
                *Será redireccionado a Whats app para finalizar su compra*
            </div>
            <Footer />
        </React.Fragment>
    );
}