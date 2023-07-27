import "./login.css";
import LogoLol from "../../assets/LogoLol.png";
import LogoProjeto from "../../assets/logo1.png";

function Login() {
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
            experiência a encontrar um novo personagem para se aventurar.
          </p>
        </div>
        <div className="lado-direito__login">
          <div className="lado-direito__login__login">
            <img
              className="lado-direito__imagem__login"
              src={LogoProjeto}
              alt="Logo do Projeto Escolha Seu Campeão"
            />
            <form className="lado-direito__form__login">
              <div className="input__container">
                <label>Usuário</label>
                <input className="formulario__input"
                  type="text"
                  name="usuário"
                  id="usuario"
                  placeholder="Digite seu nome de usuário"
                ></input>
              </div>
              <div className="input__container">
                <label>Senha</label>
                <input className="formulario__input"
                  type="text"
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
}

export default Login;
