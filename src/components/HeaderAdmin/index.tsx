import './styles.css';
import homeIcon from '../../assets/home.svg';
import productsIcon from '../../assets/products.svg';
import { NavLink } from 'react-router-dom';
import LoggedUser from '../LoggedUser';

export default function HeaderAdmin(){
    return(
    <header id='jf-header-admin'>
        <nav className='jf-container'>

            <h1>DSCommerce</h1>
            
        <div  className='jf-menu-items-container'>

        <NavLink to={'home'} className={({isActive}) => isActive ? "jf-menu-item-active" : "" }>
            <div className='jf-menu-item'>
               <img src={homeIcon} alt="Home" />
               <p>Início</p>
            </div>
         </NavLink>

         <NavLink to={'products'} className={({isActive}) => isActive ? "jf-menu-item-active" : ""}>
            <div className='jf-menu-item'>
                 <img src={productsIcon} alt="Products" />
                 <p>Produtos</p>
            </div>
         </NavLink>

         <LoggedUser />
         
        </div>
        </nav>
    </header>
    );
}