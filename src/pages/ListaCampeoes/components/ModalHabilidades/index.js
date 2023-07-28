import "./habilidades.css";
import Ahri from "../../../../assets/ahri.svg";

const ModalHabilidades = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__sobreposicao">
      <div className="modal__container">
        {children}
        <div className="modal__container-esquerdo">
          <p className="modal__nome_campeao">Ahri</p>
          <img className="modal__img" src={Ahri} alt="imagem da Ahri" />
        </div>
        <div className="modal__container-direito">
          <div className="modal__historia">
            <p className="modal__historia">
              A ligação de Ahri com a magia do mundo espiritual é inata. Ela é
              uma vastaya com traços de raposa, capaz de manipular as emoções de
              sua presa e consumir sua essência, devorando também as memórias e
              as percepções de cada alma absorvida. Outrora uma predadora
              poderosa, porém rebelde, Ahri agora viaja pelo mundo em busca de
              vestígios dos seus antepassados enquanto tenta substituir as
              memórias roubadas por novas de sua própria autoria.
            </p>
          </div>
          <div className="modal-habilidades">
            <h1 className="modal-habilidades__titulo">Habilidades</h1>
            <div className="modal-habilidades__container">
              <div className="modal-habilidades__caixa">
                <p className="modal-habilidades__tecla">Passiva</p>
                <p className="modal-habilidades__nome">Furto de Essência</p>
                <p className="modal-habilidades__descricao">
                  Depois de abater 9 tropas ou monstros, Ahri se cura. Depois de
                  eliminar um Campeão inimigo, Ahri se cura em uma quantidade
                  ainda maior.
                </p>
              </div>
              <div className="modal-habilidades__caixa">
                <p className="modal-habilidades__tecla">Passiva</p>
                <p className="modal-habilidades__nome">Furto de Essência</p>
                <p className="modal-habilidades__descricao">
                  Depois de abater 9 tropas ou monstros, Ahri se cura. Depois de
                  eliminar um Campeão inimigo, Ahri se cura em uma quantidade
                  ainda maior.
                </p>
              </div>

              <div className="modal-habilidades__caixa">
                <p className="modal-habilidades__tecla">Passiva</p>
                <p className="modal-habilidades__nome">Furto de Essência</p>
                <p className="modal-habilidades__descricao">
                  Depois de abater 9 tropas ou monstros, Ahri se cura. Depois de
                  eliminar um Campeão inimigo, Ahri se cura em uma quantidade
                  ainda maior.
                </p>
              </div>

              <div className="modal-habilidades__caixa">
                <p className="modal-habilidades__tecla">Passiva</p>
                <p className="modal-habilidades__nome">Furto de Essência</p>
                <p className="modal-habilidades__descricao">
                  Depois de abater 9 tropas ou monstros, Ahri se cura. Depois de
                  eliminar um Campeão inimigo, Ahri se cura em uma quantidade
                  ainda maior.
                </p>
              </div>

              <div className="modal-habilidades__caixa">
                <p className="modal-habilidades__tecla">Passiva</p>
                <p className="modal-habilidades__nome">Furto de Essência</p>
                <p className="modal-habilidades__descricao">
                  Depois de abater 9 tropas ou monstros, Ahri se cura. Depois de
                  eliminar um Campeão inimigo, Ahri se cura em uma quantidade
                  ainda maior.
                </p>
              </div>
              <div className="modal__botao">
              <button className="modal__fechar" onClick={onClose}>
                Fechar
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHabilidades;
