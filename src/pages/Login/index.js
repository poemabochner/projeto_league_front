import "./login.css";
import LogoLol from "../../assets/LogoLol.png";
import LogoProjeto from "../../assets/logo1.png"

function Login() {
  return (
    <>
      <div className="container__login">
        <div className="lado-esquerdo">
          <img
            className="lado-esquerdo__imagem"
            src={LogoLol}
            alt="Logo do League of Legends"
          />
          <p className="lado-esquerdo__texto">
            O League of Legends é um jogo estratégico e muito divertido O
            projeto Escolha Seu Campeão visa ajudar novos jogadores a conhecerem
            melhor os campeões do jogo e, até mesmo,
          </p>
        </div>
        <div className="lado-direito">
          <div className="lado-direito__login">
            <img className="lado-direito__imagem" src={LogoProjeto} alt="Logo do Projeto Escolha Seu Campeão"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
