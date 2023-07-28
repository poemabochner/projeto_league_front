import axios from 'axios';

export const doLogin = (usuario, senha) => {
    return axios.post('http://localhost:8080/login', {
        nomeUsuario: usuario,
        senhaUsuario: senha
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}