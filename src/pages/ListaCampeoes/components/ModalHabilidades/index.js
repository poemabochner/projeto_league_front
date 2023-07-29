import { useEffect, useState } from 'react';
import { useAuth } from '../../../../contexts/auth';
import "./habilidades.css";
import { getCampeao } from '../../../../services/api';

const ModalHabilidades = ({ isOpen, onClose, children, id }) => {
  const { token } = useAuth();
  const [campeaoData, setCampeaoData] = useState(null);

  useEffect(() => {
    if(!id) {
      return;
    }

    (async() => {
      const response = await getCampeao(token, id);
      setCampeaoData(response);
    })();
  }, [id])

  if (!isOpen) return null;
  if (!campeaoData) return null;

  return (
    <div className="modal__sobreposicao">
      <div className="modal__container">
        {children}
        <div className="modal__container-esquerdo">
          <p className="modal__nome_campeao">{campeaoData.nomeCampeao}</p>
          <img className="modal__img" src={campeaoData.urlImagemCampeao} alt="imagem da Ahri" />
        </div>
        <div className="modal__container-direito">
          <div className="modal__historia">
            <p className="modal__historia">{campeaoData.historiaCampeao}</p>
          </div>
          <div className="modal-habilidades">
            <h1 className="modal-habilidades__titulo">Habilidades</h1>
            <div className="modal-habilidades__container">
            {campeaoData.listaHabilidade.map((habilidade, index) => (
                <div key={index} className="modal-habilidades__caixa">
                  <p className="modal-habilidades__tecla">{habilidade.teclaHabilidade}</p>
                  <p className="modal-habilidades__nome">{habilidade.nomeHabilidade}</p>
                  <p className="modal-habilidades__descricao">{habilidade.descricaoHabilidade}</p>
                </div>
              ))}
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
