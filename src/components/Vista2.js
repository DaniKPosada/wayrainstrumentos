import React from "react";
import './Vista2.css';
import Header from "./Header.js";
import Footer from "./Footer.js"
import Categorias from "./Categorias.js";
import CardGrande from "./CardGrande.js";
export default function Vista2(){
    return(
        <React.Fragment>
            <Header />
            <Categorias />
            <CardGrande />
            <Footer />
        </React.Fragment>
    );
}