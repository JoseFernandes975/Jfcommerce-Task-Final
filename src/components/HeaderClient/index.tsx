import './styles.css'
import cartIcon from '../../assets/CartIcon.svg';
import adminIcon from '../../assets/admin.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ContextCartCount } from '../../utils/context-cart';
import LoggedUser from '../LoggedUser';
import * as authService from '../../services/auth-service';
import { ContextToken } from '../../utils/context-token';

export default function HeaderClient(){

    const { contextCartCount } = useContext(ContextCartCount);

    const { contextTokenPayload } = useContext(ContextToken);

    return(
    <header className='jf-header-container-client'>
        <nav className='jf-nav-container-client jf-container'>
            <NavLink to={'/catalog'}>
             <h1>DSCommerce</h1>
            </NavLink>
            
            <div className='jf-container-items'>

             <div className='jf-container-cart-header'>

                   {
                    contextTokenPayload
                    &&
                    authService.hasAnyRoles(["ROLE_ADMIN"])
                    &&
                     <NavLink to={'/admin'}>
                      <img src={adminIcon} alt="Admin" />
                     </NavLink>
                   }

                    <NavLink to={'/cart'}>
                     <img src={cartIcon} alt="Carrinho" />
                     </NavLink>
                     {
                        contextCartCount > 0
                        &&
                        <div className='jf-cart-count'>{contextCartCount}</div>
                        }

                </div>
                
                <LoggedUser />
            </div>
        </nav>
    </header>
    );
}