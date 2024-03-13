import './styles.css'
import computerImg from '../../../assets/computer.svg'
import CategoriesCard from '../../../components/CategoriesCard';
import ButtonBlue from '../../../components/ButtonBlue';
import ButtonWhite from '../../../components/ButtonWhite';

export default function Details(){
    
    return(
        <main>
            <section id='jf-section-details' className='jf-container'>
                <div className="jf-container-details-product">
                    <div className='jf-details-top jf-line-bd-bottom'>
                     <img src={computerImg} alt="computer" />
                    </div>
                    
                    <div className='jf-details-bottom'>
                        <h2 className='jf-price'>R$ 5000,00</h2>
                        <h4 className='jf-name'>Computador Gamer XT</h4>
                        <p className='jf-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                       
                            
                        <div className='jf-container-cards-categories'>
                         <CategoriesCard text='Eletrônicos' />
                         <CategoriesCard text='Computadores' />
                        </div>
                        
                    </div>

                </div>
                
                <div className='jf-buttons-container'>
                 <ButtonBlue text='Comprar'/>
                 <ButtonWhite text='Início' />
                </div>
                
            </section>
        </main>
    );
}