import './rodape.css';

import Github from '../../assets/github.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Email from '../../assets/e-mail.svg'

function Footer () {
 return(
    <>
    <div className='container__rodape'>
        <div>
            <p className='texto__rodape'>League of Legends</p>
        </div>

        <div className='icones__rodape'>
            <a className='icones__rodape__icon' href='https://github.com/poemabochner' target="_blank" rel='noreferrer'><img src={Github} alt='ícone Github'/></a>
            <a className='icones__rodape__icon' href='https://web.whatsapp.com/send?phone=5521999764700' target="_blank" rel='noreferrer'><img src={Whatsapp} alt='ícone Whatsapp'/></a>
            <a className='icones__rodape__icon' href='mailto:poemabochner8@gmail.com'  target="_blank" rel='noreferrer'><img src={Email} alt='ícone E-mail'/></a>
        </div>
    </div>
    </>
 )
}

export default Footer;