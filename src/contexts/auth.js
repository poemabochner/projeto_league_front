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
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);

  const login = async(usuario, senhaUsuario) => {
    console.log("login auth", { usuario, senhaUsuario });
    // setUsuario({ id: "123", usuario });

    try {
      const resposta = await doLogin(usuario, senhaUsuario);
      setToken(resposta.headers['authorization'])
      setUsuario(usuario); 
    } catch(err) {
      alert("Usuário e/ou senha incorretos!")
    }
    
  };

  const logout = () => {
    console.log("logout");
    setUsuario(null);
    setToken(null);
    window.location = '/login';
  };

  return(
      <AuthContext.Provider
        value={{ authenticated: !!usuario, usuario, login, logout, token }}
      >
        { children }
      </AuthContext.Provider>
    )
}