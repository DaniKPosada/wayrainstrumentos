import React from "react";

export default function Categorias(){
    return(
        <React.Fragment>
                <div className="categorias">
                        <h2>Categorías</h2>
                        <div className="scrollmenu">
                        <button type="button" className="bCategoria">
                                <span className="visually-hidden">Todos</span>
                        </button> 
                        <button type="button" className="bCategoria">
                                <span className="visually-hidden">Zampoñas</span>
                        </button> 
                        <button type="button" className="bCategoria">
                                <span className="visually-hidden">Quenas</span>
                        </button> 
                        <button type="button" className="bCategoria">
                        <span className="visually-hidden">Flauta de Pan</span>
                        </button> 
                        <button type="button" className="bCategoria">
                                <span className="visually-hidden">Quenachos</span>
                        </button>
                        <button type="button" className="bCategoria">
                                <span className="visually-hidden">Toyos</span>
                        </button>
                        <button type="button" className="bCategoria">
                                <span className="visually-hidden">Semitoyos</span>
                        </button>
                        </div>
                </div>
        </React.Fragment>

    );
    
}