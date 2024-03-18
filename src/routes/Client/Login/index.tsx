/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import ButtonBlue from '../../../components/ButtonBlue';
import './styles.css';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';

export default function Login(){

  const navigate = useNavigate();

  const { setContextTokenPayload } = useContext(ContextToken);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });


    function handleChangeInput(event: any){
      const fieldName = event.target.name;
      const value = event.target.value;
      setFormData({...formData, [fieldName]: value});
    }

    function handleSubmitLogin(event: any){
     event.preventDefault();
     authService.requestLogin(formData).then(response => {
        console.log(response);
        authService.saveToken(response.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayload());
        navigate('/catalog');
     }).catch(error => {
        console.log(error);
     })
    }

    return(

      <main>
        <section id="jf-section-login" className='jf-container'>

        <div className='jf-login-container'>

            <h2>LOGIN</h2>

        <form className='jf-form-login' action="">
         <input name='username' onChange={handleChangeInput} type="text" placeholder='Email'/>
         <div className='jf-error-msg'>Campo Obrigatório</div>
         <input onChange={handleChangeInput} name='password' type="text" placeholder='Senha'/>
        </form>

      <div onClick={handleSubmitLogin} className='jf-mt20'>
       <ButtonBlue text='Entrar' />
      </div>

        </div>

        </section>
      </main>
    );
}