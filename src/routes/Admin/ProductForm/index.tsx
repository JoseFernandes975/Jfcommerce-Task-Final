import { useState } from 'react';
import FormInput from '../../../components/FormInput';
import './styles.css';

export default function ProductForm(){

    const [formData, setFormData] = useState<any>({
            name: {
                name: 'name',
                placeholder: 'Nome',
                value: "",
                type: "text",
                id: "name"
              },
              price: {
                value: 0,
                placeholder: "Preço",
                id: "price",
                type: "number",
                name: "price"
              },
              imgUrl: {
                name: "imgUrl",
                id: "imgUrl",
                type: "text",
                placeholder: "Imagem",
                value: ""
              }
    })

    function handleInputChange(event: any){
      const inputName = event.target.name;
      const inputValue = event.target.value;
     setFormData({...formData, [inputName]: {...formData[inputName], value: inputValue}})
    }

    return(
     <main>
        <section id='jf-section-form-product' className='jf-container'>
        
        <div className='jf-container-form-product'>
          <h2 className='jf-title-form-product jf-mt20'>DADOS DO PRODUTO</h2>
    
    <form className='jf-form-product jf-mt20' action="">
        <FormInput {...formData.name} className='jf-form-control' onChange={handleInputChange}  />

        <FormInput {...formData.price} className='jf-form-control' onChange={handleInputChange}  />

        <FormInput {...formData.imgUrl} className='jf-form-control' onChange={handleInputChange}  />
    </form>

        </div>

        </section>
     </main>
    )
}