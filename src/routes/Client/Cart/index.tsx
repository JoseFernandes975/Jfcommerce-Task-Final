import './styles.css';
import computerImg from '../../../assets/computer.svg';
import ButtonBlue from '../../../components/ButtonBlue';
import ButtonWhite from '../../../components/ButtonWhite';

export default function Cart(){
    return(
     <main>
     <section id="jf-section-cart" className="jf-container">

        <div className="jf-cart-container ">

        <div className='jf-item-cart jf-line-bd-bottom'>
        <div className='jf-item-left'>
           <img src={computerImg} alt="" />
            <div className='jf-information-rigth' >
             <h2 className='jf-name'>Computador Gamer XT</h2>
              <div className='jf-quantity-container'>
               <span>-</span>
               <h3>1</h3>
               <span>+</span>
              </div>
            </div>
          </div>
          <p className='jf-subtotal'>R$ 5000,00</p>
        </div>
         

        <div className='jf-item-cart jf-line-bd-bottom'>
        <div className='jf-item-left'>
           <img src={computerImg} alt="" />
            <div className='jf-information-rigth' >
             <h2 className='jf-name'>Computador Gamer XT</h2>
              <div className='jf-quantity-container'>
               <span>-</span>
               <h3>1</h3>
               <span>+</span>
              </div>
            </div>
          </div>
          <p className='jf-subtotal'>R$ 5000,00</p>
        </div>
         
          
        <h2 className='jf-total'>R$ 15000,00</h2>
         
        </div>

            <div className='jf-bt-container'>
             <ButtonBlue text='Finalizar pedido' />
             <ButtonWhite text='Continuar Comprando' />
            </div>
       

     </section>
     </main>
    );
}