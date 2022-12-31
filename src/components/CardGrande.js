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
                                <span className="precio">${precio.toLocaleString()}</span>
                                <div className="afinacion">             
                                    <label for="lang">Afinación:<br></br></label>
                                    <select name="lenguajes" id="lang">
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="C+">C+</option>
                                        <option value="D+">D+</option>
                                        <option value="E+">E+</option>
                                        <option value="F+">F+</option>
                                        <option value="G+">G+</option>
                                    </select>
                                </div>
                                <div className="material">
                                    <span className="material1">Material:</span>
                                    <label className="checkbox-inline">
                                        <input type="radio" class="checkbox_1" value="0" name={id} checked/>
                                        Bambú
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="radio" class="checkbox_1" value="0" name={id}/>
                                        PBC
                                    </label>
                                </div>
                                <div className="añadir">
                                    +
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    );
}