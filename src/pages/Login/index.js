import { useState, useEffect } from "react";

import { useAuth } from "../../contexts/auth";

import "./login.css";
import LogoLol from "../../assets/LogoLol.png";
import LogoProjeto from "../../assets/logo1.png";

const Login = () => {

  const {authenticated, login} = useAuth();

  const [usuario, setUsuario] = useState("");
  const [senhaUsuario, setSenhaUsuario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { usuario, senhaUsuario });
    
    login(usuario, senhaUsuario);
  };

  // useEffect(() => {
  //   if(authenticated) {
  //     window.location = '/listacampeoes';
  //     return null;
  //   }
  // }, [authenticated]);

  return (
    <>
      <div className="container__login">
        <div className="lado-esquerdo__login">
          <img
            className="lado-esquerdo__imagem__login"
            src={LogoLol}
            alt="Logo do League of Legends"
          />
          <p className="lado-esquerdo__texto__login">
            O League of Legends é um jogo estratégico e muito divertido. O
            projeto Escolha Seu Campeão visa ajudar novos jogadores a conhecerem
            melhor os campeões do jogo e, até mesmo, auxiliar jogadores já com
            experiência a encontrarem um novo personagem para se aventurar.
          </p>
        </div>
        <div className="lado-direito__login">
          <div className="lado-direito__login__login">
            <img
              className="lado-direito__imagem__login"
              src={LogoProjeto}
              alt="Logo do Projeto Escolha Seu Campeão"
            />
          
            <form className="lado-direito__form__login" onSubmit={handleSubmit}>
              <div className="input__container">
                <label>Usuário</label>
                <input
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="formulario__input"
                  type="text"
                  name="usuário"
                  id="usuario"
                  placeholder="Digite seu nome de usuário"
                ></input>
              </div>
              <div className="input__container">
                <label>Senha</label>
                <input
                  value={senhaUsuario}
                  onChange={(e) => setSenhaUsuario(e.target.value)}
                  className="formulario__input"
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Digite sua senha"
                ></input>
              </div>
              <button className="form__botao">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
