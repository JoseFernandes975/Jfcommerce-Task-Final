import './styles.css';
import computerImg from '../../../assets/computer.svg';
import editIcon from '../../../assets/editIcon.svg';
import deleteIcon from '../../../assets/deleteIcon.svg';
import ButtonNewPage from '../../../components/ButtonNextPage';

export default function Products(){
  return(
   <main>
    <section id='jf-section-products-admin' className='jf-container'>

      <table className='jf-mb20'>
       <thead>
        <tr>
        <th className='jf-tb576'>ID</th>
        <th></th>
        <th className='jf-tb768'>Preço</th>
        <th className='jf-txt-left'>Nome</th>
        </tr>
       </thead>
       <tbody>
        <tr>
            <td className='jf-576'>341</td>
            <td className='jf-product-listing-image'><img src={computerImg} alt="Computer" /></td>
            <td className='jf-tb768'>R$ 5000,00</td> 
            <td className='jf-txt-left'>Computer Gamer XT</td>
            <td><img className='jf-product-listing-btn' src={editIcon} alt="Editar" /></td>
            <td><img className='jf-product-listing-btn' src={deleteIcon} alt="Deletar" /></td>
        </tr>
        <tr>
            <td className='jf-576'>341</td>
            <td className='jf-product-listing-image'><img src={computerImg} alt="Computer" /></td>
            <td className='jf-tb768'>R$ 5000,00</td> 
            <td className='jf-txt-left'>Computer Gamer XT</td>
            <td><img className='jf-product-listing-btn' src={editIcon} alt="Editar" /></td>
            <td><img className='jf-product-listing-btn' src={deleteIcon} alt="Deletar" /></td>
        </tr>
        <tr>
            <td className='jf-576'>341</td>
            <td className='jf-product-listing-image'><img src={computerImg} alt="Computer" /></td>
            <td className='jf-tb768'>R$ 5000,00</td> 
            <td className='jf-txt-left'>Computer Gamer XT</td>
            <td><img className='jf-product-listing-btn' src={editIcon} alt="Editar" /></td>
            <td><img className='jf-product-listing-btn' src={deleteIcon} alt="Deletar" /></td>
        </tr>
       </tbody>

      </table>
      
      <ButtonNewPage text='Carregar mais' />

    </section>
   </main>
  )
}