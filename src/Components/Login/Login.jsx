import React, { useState } from "react";

const Formulario = ({onBack}) => {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cpf, password);
        alert("Enviando os dados: " + cpf + " - " + password);
    };
    if (cpf === '1111' && password === '1234') {
        alert("Login feito com sucesso!");
    } else {
        alert("Os dados digitados estão incorretos");
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>CPF: </label>
                <input type="text" minLength={3} maxLength={11} value={cpf} 
                onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF"/>
            </div>
            <div>
                <label>Senha: </label>
                <input type="password" minLength={3} maxLength={11} value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha"/>
            </div>
            <div className="recall-forget">
                <label> 
                    <input type="checkbox"/>
                    Lembre de mim 
                </label>
                <br/>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button type='submit'>Entrar</button>
            <div className="cadastre">
                <p>Não tem uma conta?</p>
                <button type="button" onClick={() => alert("Redirecione para a página de cadastro")}>Cadastre-se</button>
            </div>
            <button type="button" onClick={onBack}>Voltar</button>
        </form>
    );
};

export default Formulario;
