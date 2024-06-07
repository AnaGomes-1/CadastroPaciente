import React from "react";
import { Link } from "react-router-dom";
import './Perfil.css'; 
import calendario from '../../assets/img1.png';
import notas from '../../assets/img2.png';
import dados from '../../assets/img3.png';

export default function Perfil() {
  return (
    <div className="perfil-container">

      <h1>Portal do Paciente</h1>

      <div className="cards-container">

        <Link to="/Agendamento" className="card">
          <img src={calendario} alt="Card 1" />
          <h2>Agendamento</h2>
          <p>Agendamento de consultas</p>
        </Link>

        <Link to="/Historico" className="card">
        <img className="img2" src={notas} alt="Card 2" />
          <h2>Histórico</h2>
          <p>Meu histórico</p>
        </Link>

        <Link to="/Atualizacao" className="card">
        <img src={dados} alt="Card 3" />
          <h2>Meus dados</h2>
          <p>Atualizar dados</p>
        </Link>


      </div>
    </div>
  );
}
