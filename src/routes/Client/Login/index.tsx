/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useState } from 'react';
import ButtonBlue from '../../../components/ButtonBlue';
import './styles.css';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import FormInput from '../../../components/FormInput';
import * as form from '../../../utils/forms';

export default function Login() {

  const navigate = useNavigate();

  const [requestSubmitFail, setRequestSubmitFail] = useState(false);

  const { setContextTokenPayload } = useContext(ContextToken);

    const [formData, setFormData] = useState<any>({
        username: {
         value: "",
         id: "username",
         name: "username",
         placeholder: "Email",
         type: "text",
         validation: function(value: string){
          return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
         },
         message: "Favor informar um email válido"
        },
        password: {
          value: "",
          id:"password",
          name: "password",
          placeholder: "Senha",
          type: "password"
        }
    });


    function handleChangeInput(event: any){
      const fieldName = event.target.name;
      const value = event.target.value;
      const result = form.updateAndValidate(formData, fieldName, value);
      setFormData(result);
    }

    function handleTurnDirty(name: string){
    const newFormData = form.dirtyAndValidate(formData, name);
     setFormData(newFormData);
    }

    function handleSubmitLogin(event: any){
     event.preventDefault();

     setRequestSubmitFail(false);

    const credentialsForm = form.dirtyAndValidateAll(formData);

    if(form.hasAnyInvalid(credentialsForm)){
      setRequestSubmitFail(true);
      return;
    }
    

    const requestBody = form.toValues(formData);
  
     authService.requestLogin(requestBody).then(response => {
        authService.saveToken(response.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayload());
        navigate('/catalog');
     }).catch(error => {
        console.log(error);
        setRequestSubmitFail(true);
     })
    
  }

    return(

      <main>
        <section id="jf-section-login" className='jf-container'>

        <div className='jf-login-container'>

            <h2>LOGIN</h2>

        <form className='jf-form-login' action="">
          <div>
           <FormInput {...formData.username} className="jf-form-control" onChange={handleChangeInput} onTurnDirty={handleTurnDirty} />
           <div className='jf-error-message'>{formData.username.message}</div>
          </div>
      
          <div>
           <FormInput {...formData.password} className='jf-form-control' onChange={handleChangeInput} onTurnDirty={handleTurnDirty} />
          </div>
         
        </form>

        {
          requestSubmitFail
          && 
          (
          <div className='jf-form-global-error-message'>
             Usuário ou senha inválidos
          </div>
          )
          
        }

      <div onClick={handleSubmitLogin} className='jf-mt20'>
       <ButtonBlue text='Entrar' />
      </div>

        </div>

        </section>
      </main>
    );
 }
