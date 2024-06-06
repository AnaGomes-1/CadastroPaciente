import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Agendamento () {
    const [usuario, setUsuario] = useState([]);
    const [nomeUsuario, setNomeUsuario] = useState('');

    const [dados, setDados] = useState({data: "", hora: "", especialidade: "", medico: "", estado: "", cidade: "" });
    const [edit, setEdit] = useState(null)
    
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
        setUsuario(storedUsers);
    }, []);

    const [data, setData] = useState("");

    const [hora, setHora] = useState("");

    const[especialidade, setEspecialidade] = useState("");

    const [medico, setMedico] = useState("");

    const[estado, setEstado] = useState("");

    const[cidade, setCidade] = useState("");


    const estados = ['SP', 'RJ', 'MG', 'RS', 'SC'];

    const cidadesPorEstado = {
    SP: ['São Paulo', 'Campinas', 'Osasco'],
    RJ: ['Rio de Janeiro', 'Duque de Caxias', 'Petrópolis'],
    MG: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'],
    RS: ['Porto Alegre', 'Caxias do Sul', 'Gramado'],
    SC: ['Blumenau', 'Joinville', 'Lages'],
};

    const especialidades = ['Cardiologista', 'Ginecologista', 'Dermatologista'];
    const medicos = ['Dr. João', 'Dr. Maria', 'Dr. Pedro'];

    const handleSubmit = (event) => {
        event.preventDefault();
        let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

        const agendamento = {
            usuario: nomeUsuario,
            data: data,
            hora: hora,
            especialidade: especialidade,
            medico: medico,
            estado: estado,
            cidade: cidade
        };

        agendamentos.push(agendamento);

        localStorage.getItem("agendamentos", JSON.stringify(agendamentos));



        // const novoUsuario = {
        //     nomeUsuario,
        //     data,
        //     hora,
        //     especialidade,
        //     medico,
        //     estado,
        //     cidade
        // };
        // setUsuario([...usuario, novoUsuario]);
        // setNomeUsuario('');
        // setData('');
        // setHora('');
        // setEspecialidade('');
        // setMedico('');
        // setEstado('');
        // setCidade('');
        // console.log("Agendamento feito com sucesso", nomeUsuario, data, hora, especialidade, medico, estado, cidade);
    };

    const salvar = () => {
        let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        const novoAgendamento = {
            nome: nomeUsuario,
            data: data,
            hora: hora,
            especialidade: especialidade,
            medico: medico,
            estado: estado,
            cidade: cidade
        };
        novoAgendamento.push(agendamentos);
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    };

    return(
      <div className="agendamento-consulta">
        <h2>Agendar Consulta</h2>
      
        <form onSubmit={handleSubmit}>

          <label>Agendando consulta de: {nomeUsuario}</label>

          <br />

          <div>
            <label>Data:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div>
            <label>Hora:</label>
            <input
              type="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>

          <div>
            <label>Medico:</label>
            <input
              type="medico"
              value={medicos}
              onChange={(e) => setMedico(e.target.value)}
            />
          </div>

          <div>
            <label>Especialidade:</label>
            <input
              type="text"
              value={especialidades}
              onChange={(e) => setEspecialidade(e.target.value)}
            />
          </div>
        
        <div>
            <label>Estado: </label>
              <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                  {estados.map((estado) => (
                        <option key={estado} value={estado}>
                            {estado}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Cidade: </label>
                <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
                    {cidadesPorEstado[estado]?.map((cidade) => (
                        <option key={cidade} value={cidade}>
                            {cidade}
                        </option>
                    ))}
                </select>
            </div>

          <button type="submit">Agendar</button>

          <button>
            <Link to="/AtualizarDados">Editar</Link>
          </button>

      </form>
    </div>
  );
}


export default Agendamento;