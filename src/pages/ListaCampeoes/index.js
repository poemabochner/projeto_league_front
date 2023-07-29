import "./lista.css";

import { useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ComponenteLista from "./components/ComponenteLista";
import { useAuth } from "../../contexts/auth";

const ListaCampeoes = () => {

  const { authenticated } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      window.location = "/";
    }
  }, [authenticated]);

  if(!authenticated) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="container__lista-superior">
        <div className="lado-esquerdo__lista">
          <p>Escolha Seu</p>
          <h1 className="lado-esquerdo__titulo-destaque__lista">Campeão</h1>
        </div>
        <div className="lado-direito__lista">
          <p className="lado-direito__lista-texto">
            O Lol possui diversos estilos de campeões, cada um com uma mecânica
            única e empolgante e uma função estratégica específica. Esperamos
            que você encontre aqui um campeão com o qual seja capaz de se
            identificar para poder aproveitar o jogo.{" "}
          </p>
        </div>
      </div>
      <div className="container__lista-inferior">
        <div className="container__lista-inferior__campeoes">
          <ComponenteLista />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListaCampeoes;
