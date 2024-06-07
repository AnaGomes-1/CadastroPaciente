import React, { useState, useEffect } from "react";

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

    <section>
      <div className="historico-consultas">
        <h2>Histórico de Consultas</h2>
        <ul>
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
