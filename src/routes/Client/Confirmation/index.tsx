import './styles.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as orderService from '../../../services/order-service';
import { OrderDTO } from "../../../models/order";
import ButtonWhite from '../../../components/ButtonWhite';
import { Link } from 'react-router-dom';

export default function Confirmation() {

    const params = useParams();

    const [order, setOrder] = useState<OrderDTO>();

    useEffect(() => {
       orderService.findByIdOrder(Number(params.orderId)).then(response => {
         setOrder(response.data);
       })
    }, [])

    return(
      <main>
        <section id="jf-section-order" className="jf-container">

        <div className="jf-cart-container ">

            {
             order
             &&
             order.items.map(x => ( 
             <div key={x.productId} className='jf-item-cart jf-line-bd-bottom'>
               <div className='jf-item-left'>
                 <img src={x.imgUrl} alt={x.name} />
                  <div className='jf-information-rigth' >
                   <h2 className='jf-name-order'>{x.name}</h2>
                     <div className='jf-quantity-container'>
                      <h3>{x.quantity}</h3>
                      
                     </div>
                  </div>
                </div>
                    <p className='jf-subtotal'>R$ {x.subTotal.toFixed(2)}</p>
                </div>
                 ))
             }

                <h2 className='jf-total'>R$ {order?.total.toFixed(2)}</h2>
 
            </div>

             <h2 className='jf-message-order jf-mt20'>Pedido realizado! Número {order?.id}</h2>


            <div className='jf-buttons-container'>
              <Link to={'/'}>
               <ButtonWhite text='Início' />
              </Link>
            </div>
            

        </section>
      </main>
    )
}