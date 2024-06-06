import React from "react";
import { Link } from "react-router-dom";
import Foto from "../../assets/Foto1.png";

export default function Home() {
  return (
    <section className="container">
      <div>
        <h1>Faça sua consulta online de forma rápida e fácil.</h1>

        <h3>Agende agora mesmo sua consulta. Sua saúde é prioridade.</h3>
        <button>
          <Link to="/Login">Pré-agende agora</Link>
        </button>
        
      </div>
      
      <div className="Foto1">
          <img src={Foto} alt="" />
      </div>

    </section>
  );
}