import { useState, useEffect } from "react";

function Historico() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    setConsultas(agendamentos);
  }, []);

  return (
    <div className="historico-consultas">
      <h2>Historicos</h2>
      <ul>
        {consultas.map((consulta, index) => (
          <li key={index}>
            {consulta.usuario} - {consulta.data} - {consulta.especialidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Historico;
