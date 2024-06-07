import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Agendamento.css';

function Agendamento() {
  const [parte, setParte] = useState(1); // Estado para controlar a parte do formulário

  const [nomeUsuario, setNomeUsuario] = useState('');
  const [dados, setDados] = useState({
    data: '',
    hora: '',
    especialidade: '',
    medico: '',
    estado: '',
    cidade: ''
  });

  const mostrarDados = () => {
    alert("Consulta agendada com sucesso!");

    const listaDados = `
      Nome do Usuário: ${nomeUsuario}
      Data: ${dados.data}
      Horário: ${dados.hora}
      Especialidade: ${dados.especialidade}
      Médico: ${dados.medico}
      Estado: ${dados.estado}
      Cidade: ${dados.cidade}
    `;
    alert(listaDados);
  };


  const estados = ['SP', 'RJ', 'MG', 'RS', 'SC'];
  const cidadesPorEstado = {
    SP: ['São Paulo', 'Campinas', 'Osasco'],
    RJ: ['Rio de Janeiro', 'Duque de Caxias', 'Petrópolis'],
    MG: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'],
    RS: ['Porto Alegre', 'Caxias do Sul', 'Gramado'],
    SC: ['Blumenau', 'Joinville', 'Lages']
  };

  const especialidades = ['Cardiologista', 'Ginecologista', 'Dermatologista'];
  const medicos = ['Dr. João', 'Dr. Maria', 'Dr. Pedro'];

  const avancar = () => {
    setParte(parte + 1);
  };

  const voltar = () => {
    setParte(parte - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    const agendamento = {
      usuario: nomeUsuario,
      ...dados
    };

    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    mostrarDados();
    
    setNomeUsuario('');
    setDados({
      data: '',
      hora: '',
      especialidade: '',
      medico: '',
      estado: '',
      cidade: ''
    });
    console.log('Agendamento feito com sucesso', agendamento);
  };

  return (
    <div className="agendamento-consulta">
      <nav className='navAgend'>
        <button type="button"><Link to="/Perfil">Voltar ao Perfil</Link></button>
      </nav>
      <h2>Agendar Consulta</h2>

      {parte === 1 && (
        <form onSubmit={handleSubmit}>
          <label>Agendando consulta de: {nomeUsuario}</label>
          <br />

          <div>
            <label>Nome do Usuário:</label>
            <input
              type="text"
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
            />
          </div>

          <button type="button" onClick={avancar}>Próximo</button>
        </form>
      )}

      {parte === 2 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Data:</label>
            <input
              type="date"
              name="data"
              value={dados.data}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Hora:</label>
            <input
              type="time"
              name="hora"
              value={dados.hora}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Especialidade:</label>
            <select name="especialidade" value={dados.especialidade} onChange={handleChange}>
              <option value="">Selecione</option>
              {especialidades.map((especialidade) => (
                <option key={especialidade} value={especialidade}>
                  {especialidade}
                </option>
              ))}
            </select>
          </div>
          
          <button type="button" onClick={voltar}>Voltar</button>
          <button type="button" onClick={avancar}>Próximo</button>
        </form>
      )}

      {parte === 3 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Médico:</label>
            <select name="medico" value={dados.medico} onChange={handleChange}>
              <option value="">Selecione</option>
              {medicos.map((medico) => (
                <option key={medico} value={medico}>
                  {medico}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Estado:</label>
            <select name="estado" value={dados.estado} onChange={handleChange}>
              <option value="">Selecione</option>
              {estados.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Cidade:</label>
            <select
              name="cidade"
              value={dados.cidade}
              onChange={handleChange}
              disabled={!dados.estado}
            >
              <option value="">Selecione</option>
              {cidadesPorEstado[dados.estado]?.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>

          <button type="button" onClick={voltar}>Voltar</button>
          <button type="submit">Agendar</button>
        </form>
      )}

    </div>
  );
}

export default Agendamento;
