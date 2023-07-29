import React, { useState, createContext, useContext } from "react";
import { doLogin } from '../services/auth';
import { useEffect } from "react";

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
    console.log("login auth", { usuario, senhaUsuario });
    // setUsuario({ id: "123", usuario });

    try {
      const resposta = await doLogin(usuario, senhaUsuario);
      console.log("response headers:", resposta.headers);
      setToken(resposta.headers['authorization'])
      console.log("token:", token);
      setUsuario(usuario); 
      console.log("authenticated:", !!usuario);

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