import './componentelista.css'

import Ahri from '../../../../assets/ahri.svg'

function ComponenteLista (){
    return(
        <>
        <div className='componente-lista__container'>
            <div><img className='componente-lista__img' src={Ahri} alt='imagem da Ahri'/></div>
            <div className='componente-lista__caixa'>
            <p className='componente-lista__titulo'>nome do campeão:</p>
            <p className='componente-lista__conteudo'>Katarina</p></div>
            <div className='componente-lista__caixa'>
                <p className='componente-lista__titulo'>função:</p>
                <p className='componente-lista__conteudo'>Assassino</p>
            </div>
            <div className='componente-lista__caixa'>
                <p className='componente-lista__titulo'>dificuldade:</p>
                <p className='componente-lista__conteudo'>Moderado</p>
            </div>
            <div>
                <button className='componente-lista__botao'>Saiba Mais</button>
            </div>
        </div>
        </>
    )
}

export default ComponenteLista;