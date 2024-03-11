import './styles.css'
import cartIcon from '../../assets/CartIcon.svg';

export default function HeaderClient(){
    return(
    <header className='jf-header-container-client'>
        <nav className='jf-nav-container-client jf-container'>
            <h1>DSCommerce</h1>
            <div className='jf-container-items'>
                <img src={cartIcon} alt="Carrinho" />
                <h3>Entrar</h3>
            </div>
        </nav>
    </header>
    );
}