import React, { useState, useEffect } from "react";
import '../Historico/Historico.css'
import { Link } from "react-router-dom";

function Historico() {
  const [consultas, setConsultas] = useState([]);

  
  useEffect(() => {
    const storedConsultas = JSON.parse(localStorage.getItem("agendamentos")) || [];
    setConsultas(storedConsultas);
  }, []);

  const handleDelete = (index) => {
    
    const newConsultas = [...consultas];
    newConsultas.splice(index, 1);
    
    setConsultas(newConsultas);
    
    localStorage.setItem("agendamentos", JSON.stringify(newConsultas));
  };

  return (

    <section className="history">
      <nav className='navHist'>
        <button type="button"><Link to="/Perfil">Voltar ao Perfil</Link></button>
      </nav>

      <div className="historico-consultas">
        <h2>Histórico de Consultas</h2>
        <ul className="listaHistorico">
          {consultas.map((consulta, index) => (
            <li key={index}>
              {consulta.usuario} - {consulta.data} - {consulta.especialidade}
              <button onClick={() => handleDelete(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Historico;
