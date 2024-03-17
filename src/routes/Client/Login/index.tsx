import ButtonBlue from '../../../components/ButtonBlue';
import './styles.css';

export default function Login(){
    return(

      <main>
        <section id="jf-section-login" className='jf-container'>

        <div className='jf-login-container'>

            <h2>LOGIN</h2>

        <form className='jf-form-login' action="">
        <input type="text" placeholder='Email'/>
        <div className='jf-error-msg'>Campo Obrigatório</div>
        <input type="text" placeholder='Senha'/>
        </form>

      <div className='jf-mt20'>
       <ButtonBlue text='Entrar' />
      </div>

        </div>

        </section>
      </main>
    );
}