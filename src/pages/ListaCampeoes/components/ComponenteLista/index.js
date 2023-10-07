import "./componentelista.css";
import Tooltip from "../../../../components/Tooltip";
import { useState } from "react";
import ModalHabilidades from "../ModalHabilidades";
import { useEffect } from "react";
import { getListaCampeoes } from "../../../../services/api";
import { useAuth } from "../../../../contexts/auth";

const ComponenteLista = () => {
  const { token } = useAuth();
  const [championData, setChampionData] = useState([]);
  const [campeaoId, setCampeaoId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListaCampeoes(token);
        
        setChampionData(response);
      } catch (error) {
        console.error("Erro ao obter os dados do campeão:", error.message);
      }
    };

    fetchData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id) => {
    setCampeaoId(id)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCampeaoId(null);
  };
  return (
    
<>
    {championData.map((campeao, index) => (
      <div
        key={campeao.idCampeao}
        className={`componente-lista__container ${index % 2 === 0 ? 'par' : 'impar'}`}
      >
        <div className="componente-lista__tooltip-img">
            <Tooltip text={campeao.epitetoCampeao}>
              <div>
                <img
                  className="componente-lista__img "
                  src={campeao['urlImagemCampeao']}
                  alt={`imagem de ${campeao.nomeCampeao}`}
                />
              </div>
            </Tooltip>
          </div>
          <div className="componente-lista__caixa">
            <h2 className="componente-lista__titulo">nome do campeão:</h2>
            <p className="componente-lista__conteudo">{campeao.nomeCampeao}</p>
          </div>
          <div className="componente-lista__caixa">
            <h2 className="componente-lista__titulo">função:</h2>
            <p className="componente-lista__conteudo">{campeao.funcaoCampeao}</p>
          </div>
          <div className="componente-lista__caixa">
            <h2 className="componente-lista__titulo">dificuldade:</h2>
            <p className="componente-lista__conteudo">{campeao.dificuldadeCampeao}</p>
          </div>
          <div>
            <button onClick={() => openModal(campeao.idCampeao)} className="componente-lista__botao">
              Saiba Mais
            </button>
          </div>
      </div>
    ))}

      {/* {championData.map((campeao) => (
        <div key={campeao.idCampeao} className="componente-lista__container">
          <div className="componente-lista__tooltip-img">
            <Tooltip text={campeao.epitetoCampeao}>
              <div>
                <img
                  className="componente-lista__img "
                  src={campeao['urlImagemCampeao']}
                  alt={`imagem de ${campeao.nomeCampeao}`}
                />
              </div>
            </Tooltip>
          </div>
          <div className="componente-lista__caixa">
            <p className="componente-lista__titulo">nome do campeão:</p>
            <p className="componente-lista__conteudo">{campeao.nomeCampeao}</p>
          </div>
          <div className="componente-lista__caixa">
            <p className="componente-lista__titulo">função:</p>
            <p className="componente-lista__conteudo">{campeao.funcaoCampeao}</p>
          </div>
          <div className="componente-lista__caixa">
            <p className="componente-lista__titulo">dificuldade:</p>
            <p className="componente-lista__conteudo">{campeao.dificuldadeCampeao}</p>
          </div>
          <div>
            <button onClick={() => openModal(campeao.idCampeao)} className="componente-lista__botao">
              Saiba Mais
            </button>
          </div>
        </div>
      ))} */}
      <ModalHabilidades
              id={campeaoId}
              isOpen={isModalOpen}
              onClose={closeModal}
            ></ModalHabilidades>
    </>
  );
};

export default ComponenteLista;
