import './styles.css';
import CatalogCard from "../../../components/CatalogCard";
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import ButtonNewPage from '../../../components/ButtonNextPage';
import SearchBar from '../../../components/SearchBar';

export default function Catalog(){

    const [products, setProducts] = useState<ProductDTO[]>();

    useEffect(() => {
      productService.findAllProducts().then(response => {
        setProducts(response.data.content);
      })
     
    }, [])


    return(
         <main>
            <section id="jf-section-catalog" className="jf-container">

              <SearchBar />
             
              <div className='jf-container-products-cards'>

                {
                    products
                    &&
                    products.map(x => <CatalogCard key={x.id} product={x} />)
                }


             </div>
             
            <ButtonNewPage text='Carregar mais' />

            </section>
         </main>
    )
}