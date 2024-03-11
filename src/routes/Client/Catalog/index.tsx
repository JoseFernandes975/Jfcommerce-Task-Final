import './styles.css';
import CatalogCard from "../../../components/CatalogCard";
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';

export default function Catalog(){

   const p1 : ProductDTO = {
        id: 1,
        name: "Computer",
        price: 2000,
        imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg'
    }

    const p2 : ProductDTO = {
        id: 2,
        name: "Computer",
        price: 2000,
        imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg'
    }
    const p3 : ProductDTO = {
        id: 3,
        name: "Computer",
        price: 2000,
        imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg'
    }

    return(
         <main>
            <section id="jf-section-catalog" className="jf-container">
             
              <div className='jf-container-products-cards'>
                 
                <CatalogCard product={p1} key={p1.id} />
                 <CatalogCard product={p2} key={p2.id} />
                 <CatalogCard product={p3} key={p3.id} />

             </div>
             
            



            </section>
         </main>
    )
}