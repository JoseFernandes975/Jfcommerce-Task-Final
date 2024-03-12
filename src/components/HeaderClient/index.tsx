import './styles.css'
import cartIcon from '../../assets/CartIcon.svg';
import { NavLink } from 'react-router-dom';

export default function HeaderClient(){
    return(
    <header className='jf-header-container-client'>
        <nav className='jf-nav-container-client jf-container'>
            <NavLink to={'/catalog'}>
             <h1>DSCommerce</h1>
            </NavLink>
            
            <div className='jf-container-items'>
                <img src={cartIcon} alt="Carrinho" />
                <h3>Entrar</h3>
            </div>
        </nav>
    </header>
    );
}