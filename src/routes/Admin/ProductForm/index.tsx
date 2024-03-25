import './styles.css';

export default function ProductForm(){

    return(
     <main>
        <section id='jf-section-form-product' className='jf-container'>
        
        <div className='jf-container-form-product'>
          <h2 className='jf-title-form-product jf-mt20'>DADOS DO PRODUTO</h2>
    
    <form className='jf-form-product jf-mt20' action="">
        <input className='jf-form-control' type="text" placeholder='Nome' />

        <input className='jf-form-control'  type="text" placeholder='Preço' />

        <input className='jf-form-control'  type="text" placeholder='Imagem' />
    </form>
    
        </div>

        </section>
     </main>
    )
}