import './styles.css';
import CatalogCard from "../../../components/CatalogCard";
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import ButtonNewPage from '../../../components/ButtonNextPage';
import SearchBar from '../../../components/SearchBar';

export default function Catalog(){

    const [products, setProducts] = useState<ProductDTO[]>();

    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    const [queryParams, setQueryParams] = useState({
      name: '',
      page: 0
    });

    useEffect(() => {
      productService.findPageProduct(queryParams.name, queryParams.page).then(response => {
        setProducts(response.data.content);
        setIsLastPage(response.data.last);
      }).catch(error => {
        console.log(error);
      });
     
    }, [queryParams]);


    function handleSearchName(searchValue: string){
      console.log(searchValue);
      setQueryParams({...queryParams, name: searchValue, page: 0});
    }

    function handleMorePage(){
      setQueryParams({...queryParams, page: queryParams.page + 1});
    }


    return(
         <main>
            <section id="jf-section-catalog" className="jf-container">

              <SearchBar onSubmitSearch={handleSearchName} />
             
              <div className='jf-container-products-cards'>

                {
                    products
                    &&
                    products.map(x => <CatalogCard key={x.id} product={x} />)
                }


             </div>
             
             {
              !isLastPage
              &&
              <div onClick={handleMorePage}>
               <ButtonNewPage text='Carregar mais' />
              </div>
              
             }
           

            </section>
         </main>
    )
}