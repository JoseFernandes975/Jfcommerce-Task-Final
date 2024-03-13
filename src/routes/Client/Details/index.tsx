import './styles.css';
import CategoriesCard from '../../../components/CategoriesCard';
import ButtonBlue from '../../../components/ButtonBlue';
import ButtonWhite from '../../../components/ButtonWhite';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as productService from '../../../services/product-service';
import { ProductDTO } from '../../../models/product';
import { Link } from 'react-router-dom';

export default function Details(){
    
    const params = useParams();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
     productService.findProductById(Number(params.productId)).then(response => {
       setProduct(response.data);
     })
    },[]);

    return(
        <main>
            <section id='jf-section-details' className='jf-container'>
              
              {
                product
                &&
                <div className="jf-container-details-product">
                  <div className='jf-details-top jf-line-bd-bottom'>
                   <img src={product.imgUrl} alt={product.name} />
                  </div>
                
                  <div className='jf-details-bottom'>
                    <h2 className='jf-price'>R$ {product.price.toFixed(2)}</h2>
                    <h4 className='jf-name'>{product.name}</h4>
                    <p className='jf-description'>{product.description}</p>
                   
                        
                    <div className='jf-container-cards-categories'>
                        {
                            product.categories.map(item => <CategoriesCard key={item.id} text={item.name} />)
                        }
                    </div>
                    
                   </div>

                 </div>
              }

               
                
                <div className='jf-buttons-container'>
                 <ButtonBlue text='Comprar'/>

                  <Link to={'/'}>
                   <ButtonWhite text='Início' />
                  </Link>
                
                </div>
                
            </section>
        </main>
    );
}