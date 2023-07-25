import React from "react";
import "./style.css"

export default function Topo(){
    return (
        <header>
            <div className="container-topo limitar-secao">
                <div className="container-logo">
                    <img src="../../assets/imagens/logo.png"></img>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">PRODUTOS</a></li>
                        <li><a href="#">SOBRE</a></li>
                        <li><a href="">CONTATO</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
