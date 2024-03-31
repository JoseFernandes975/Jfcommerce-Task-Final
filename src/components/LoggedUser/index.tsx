import { useContext, useEffect } from "react"
import { ContextToken } from "../../utils/context-token"
import * as authService from '../../services/auth-service';
import './styles.css';
import { Link } from "react-router-dom";

export default function LoggedUser() {
    

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick(){
        authService.logout();
        setContextTokenPayload(undefined);
    }

    useEffect(() => {
      setContextTokenPayload(authService.getAccessTokenPayload());
    }, [])

    return(
        
            contextTokenPayload 
            &&
            authService.isAuthenticated()
            ? (
              <div className="jf-container-logged-user">
               <p>{contextTokenPayload?.user_name}</p>
               <h4 onClick={handleLogoutClick}>Sair</h4>
             </div>
              )
            : ( 
              <Link to={'login'}><h3>Entrar</h3></Link>
              )
              
    )
}