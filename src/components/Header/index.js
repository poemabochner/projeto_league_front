import "./header.css";

import Logo2 from "../../assets/logo2.png";
import Sair from "../../assets/logout.svg";

function Header() {
  return (
    <>
      <div className="header__container">
        <div className="header__lado-esquerdo">
          <img
            className="header__img"
            src={Logo2}
            alt="Logo do Projeto Escolha Seu Campeão"
          />
        </div>

        <div className="header__lado-direito">
          <p className="header__texto">Fulano, bem-vindo a summoner's rift!</p>
          <button className="header__botao">
            <img className="header__botao-icone" src={Sair} alt="ícone de Sair" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
