import React, {useState, useEffect} from 'react'

const Agendamento = () => {
    const [usuario, setUsuario] = useState([]);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [dados, setDados] = useState({nome: "", email: "", telfone: ""});
    const [edit, setEdit] = useState(null);

    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [medico, setMedico] = useState("");
    const[especialidade, setEspecialidade] = useState("");
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


}


export default Agendamento;