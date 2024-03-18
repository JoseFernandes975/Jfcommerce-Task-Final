import './styles.css'
import cartIcon from '../../assets/CartIcon.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ContextCartCount } from '../../utils/context-cart';

export default function HeaderClient(){

    const {contextCartCount } = useContext(ContextCartCount);

    return(
    <header className='jf-header-container-client'>
        <nav className='jf-nav-container-client jf-container'>
            <NavLink to={'/catalog'}>
             <h1>DSCommerce</h1>
            </NavLink>
            
            <div className='jf-container-items'>
                <div className='jf-container-cart-header'>
                    <NavLink to={'/cart'}>
                     <img src={cartIcon} alt="Carrinho" />
                    </NavLink>
               
                {
                contextCartCount > 0
                &&
                <div className='jf-cart-count'>{contextCartCount}</div>
                }

                </div>
                
                <h3>Entrar</h3>
            </div>
        </nav>
    </header>
    );
}