import React, { useState, createContext, useContext } from "react";
import { doLogin } from '../services/auth';


export const AuthContext = createContext();

export function useAuth() {
  const authContext = useContext(AuthContext);

  return {
    ...authContext,
    AuthProvider,
  }
}

export const AuthProvider = ({children}) => {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario'));
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async(usuario, senhaUsuario) => {

    try {
      const resposta = await doLogin(usuario, senhaUsuario);
      setToken(resposta.headers['authorization'])
      setUsuario(usuario); 

      localStorage.setItem('token', resposta.headers['authorization']);
      localStorage.setItem('usuario', usuario);
      window.location = "/listacampeoes";

    } catch(err) {
      alert("Usuário e/ou senha incorretos!")
    }
    
  };

  const logout = () => {
    console.log("logout");
    setUsuario(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location = '/';
  };

  return(
      <AuthContext.Provider
        value={{ authenticated: !!usuario, usuario, login, logout, token }}
      >
        { children }
      </AuthContext.Provider>
    )
}