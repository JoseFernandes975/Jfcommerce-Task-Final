import './styles.css';
import ButtonBlue from '../../../components/ButtonBlue';
import ButtonWhite from '../../../components/ButtonWhite';
import { OrderDTO } from '../../../models/order';
import * as cartService from '../../../services/cart-service';
import { useState } from 'react';

export default function Cart(){


    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());
    

    function handleIncreaseQuantity(productId: number){
      cartService.increaseQtd(productId);
      setCart(cartService.getCart());
    }

    function handleDecreaseQuantity(productId: number){
      cartService.decreaseQtd(productId);
      setCart(cartService.getCart());
    }


    return(
     <main>
     <section id="jf-section-cart" className="jf-container">

        <div className="jf-cart-container ">


        {
          cart
          &&
          cart.items.map(x => ( 
            <div key={x.productId} className='jf-item-cart jf-line-bd-bottom'>
            <div className='jf-item-left'>
               <img src={x.imgUrl} alt={x.name} />
                <div className='jf-information-rigth' >
                 <h2 className='jf-name'>{x.name}</h2>
                  <div className='jf-quantity-container'>
                   <span onClick={() => handleDecreaseQuantity(x.productId)}>-</span>
                   <h3>{x.quantity}</h3>
                   <span onClick={() => handleIncreaseQuantity(x.productId)}>+</span>
                  </div>
                </div>
              </div>
              <p className='jf-subtotal'>R$ {x.subTotal.toFixed(2)}</p>
            </div>
          ))
        }
      
    
         
          
        <h2 className='jf-total'>R$ {cart.total.toFixed(2)}</h2>
         
        </div>

            <div className='jf-bt-container'>
             <ButtonBlue text='Finalizar pedido' />
             <ButtonWhite text='Continuar Comprando' />
            </div>
       

     </section>
     </main>
    );
}