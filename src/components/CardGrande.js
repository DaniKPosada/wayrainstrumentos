import React,{useState} from "react";
import Instrumentos from "./Instrumentos.jsx"

export default function CardGrande(){
    const [data,setData]=useState(Instrumentos);
    return(
        <div className="tarjeta">
            {data.map((values)=>{
                const {id,titulo,precio,imagen} =values;
                return(
                    <>
                        <div className="card" key={id}>
                        <div className="izquierda">
                                <img className="imagenCard" src={imagen} alt={titulo} />
                            </div>
                            <div className="derecha">
                                <div className="tituloProducto">
                                    {titulo}
                                </div>
                                <span className="precio">${precio}</span>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    );
}