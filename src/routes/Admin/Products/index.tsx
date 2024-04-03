import './styles.css';
import editIcon from '../../../assets/editIcon.svg';
import deleteIcon from '../../../assets/deleteIcon.svg';
import ButtonNewPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';
import * as productService from '../../../services/product-service';
import SearchBar from '../../../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import ButtonWhite from '../../../components/ButtonWhite';

type FormData = {
    name: string,
    page: number
}

export default function Products(){

    const [queryParams, setQueryParams] = useState<FormData>({
        name: "",
        page: 0
    });

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
      productService.findPageProduct(queryParams.name, queryParams.page).then(response => {
        const newRequest = response.data.content;
        setIsLastPage(response.data.last);
        setProducts(products.concat(newRequest));
      })
    }, [queryParams]);


    function handleNextPageClick(){
      setQueryParams({...queryParams, page: queryParams.page + 1});
    }

    function handleSearchProducts(searchName: string){
      setProducts([]);
      setQueryParams({...queryParams, name: searchName, page: 0});
    }

    function handleEditProductClick(productId: number){
     navigate(`${productId}`);
    }

    function handleCreateProductClick(){
      navigate(`create`);
    }

  return(
   <main>
    <section id='jf-section-products-admin' className='jf-container'>


      <h2 className='jf-title-products jf-mb20'>Cadastro de produtos</h2>

      <div className='jf-container-btn-create-product jf-mb20' onClick={handleCreateProductClick}>
        <ButtonWhite text='Novo' />
      </div>

      <SearchBar onSubmitSearch={handleSearchProducts} />

      <table className='jf-mb20 jf-mt20'>
       <thead>
        <tr>
        <th className='jf-tb576'>ID</th>
        <th></th>
        <th className='jf-tb768'>Preço</th>
        <th className='jf-txt-left'>Nome</th>
        </tr>
       </thead>
       <tbody>
        
        {
          products
          &&
          products?.map(x => (
         <tr key={x.id}>
            <td className='jf-576'>{x.id}</td>
            <td className='jf-product-listing-image'><img src={x.imgUrl} alt={x.name} /></td>
            <td className='jf-tb768'>R$ {x.price.toFixed(2)}</td> 
            <td className='jf-txt-left'>{x.name}</td>
            <td><img className='jf-product-listing-btn' src={editIcon} alt="Editar" onClick={() => handleEditProductClick(x.id)} /></td>
            <td><img className='jf-product-listing-btn' src={deleteIcon} alt="Deletar" /></td>
        </tr>
            ))
        }
        
       </tbody>

      </table>

      {
        !isLastPage 
        &&
        <div onClick={handleNextPageClick}>
         <ButtonNewPage text='Carregar mais' />
        </div>
      }
      
      

    </section>
   </main>
  )
}