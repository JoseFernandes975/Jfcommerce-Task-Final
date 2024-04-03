/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import './styles.css';
import * as form from '../../../services/forms';
import { useParams } from 'react-router-dom';
import * as productService from '../../../services/product-service';
import ButtonWhite from '../../../components/ButtonWhite';
import ButtonBlue from '../../../components/ButtonBlue';
import FormTextarea from '../../../components/FormTextarea';
import FormSelect from '../../../components/FormSelect';
import { CategoryDTO } from '../../../models/product';
import { selectStyles } from '../../../utils/select';
import * as categoryServices from '../../../services/category-service';

export default function ProductForm(){

  const params = useParams();

  const [categories, setCategories] = useState<CategoryDTO[]>([])

  const isEditing = params.productId !== 'create';

    const [formData, setFormData] = useState<any>({
            name: {
                name: 'name',
                placeholder: 'Nome',
                value: "",
                type: "text",
                id: "name",
                validation: function(value: string){
                  return /^.{3,80}/.test(value);
                }, 
                message: "Favor informar um nome de 3 a 80 caracteres"
              },
              price: {
                value: 0,
                placeholder: "Preço",
                id: "price",
                type: "number",
                name: "price",
                validation: function(value: any) {
                  return Number(value) > 0;
                },
                message: "Informe um preço positivo"
              },
              imgUrl: {
                name: "imgUrl",
                id: "imgUrl",
                type: "text",
                placeholder: "Imagem",
                value: ""
              },
              categories: {
               name: "categories",
               id: "categories",
               placeholder: "Categorias",
               value: [],
               validation: function(value: CategoryDTO[]){
                return value.length > 0;
              },
              message: "Escolha ao menos uma categoria"
              },
              description: {
                name: "description",
                id: "description",
                type: "text",
                placeholder: "Descrição",
                value: "",
                validation: function(value: any) {
                  return /^.{10,}/.test(value);
                }, 
                message: "Favor informar uma descrição de pelo menos 10 caracteres"
              }
    })

    function handleInputChange(event: any){
      const inputName = event.target.name;
      const inputValue = event.target.value;
     setFormData(form.updateAndValidate(formData, inputName, inputValue));
    }

    function handleTurnDirty(name: string){
     const newFormDataDirty = form.toDirty(formData, name);
     setFormData(newFormDataDirty);
    }

    useEffect(() => {
      categoryServices.findAllRequest().then(response => {
        setCategories(response.data);
      }).then(error => {
        console.log(error);
      });
    }, [])
    

    useEffect(() => {
      if(isEditing){
        productService.findProductById(Number(params.productId)).then(response => {
          setFormData(form.updateAll(formData, response.data));
        })
      }
    }, [])

    return(
     <main>
        <section id='jf-section-form-product' className='jf-container'>
        
        <div className='jf-container-form-product'>
          <h2 className='jf-title-form-product jf-mt20'>DADOS DO PRODUTO</h2>
    
    <form className='jf-form-product jf-mt20' action="">
      <div>
        <FormInput {...formData.name} className='jf-form-control' onChange={handleInputChange} onTurnDirty={handleTurnDirty} />
        <div className='jf-error-message'>{formData.name.message}</div>
      </div>
        
        <div>
        <FormInput {...formData.price} className='jf-form-control' onChange={handleInputChange} onTurnDirty={handleTurnDirty}  />
        <div className='jf-error-message'>{formData.price.message}</div>
        </div>

        <div>
           <FormInput {...formData.imgUrl} className='jf-form-control' onChange={handleInputChange} onTurnDirty={handleTurnDirty} />
        </div>

        <div>
          <FormSelect {...formData.categories} className="jf-form-control jf-form-select-container"
                styles={selectStyles}
                options={categories} onChange={(obj: any) => {
                const newFormData = form.updateAndValidate(formData, "categories", obj);
                 setFormData(newFormData);
                }}  onTurnDirty={handleTurnDirty} isMulti getOptionLabel={(obj: any) => obj.name} getOptionValue={(obj: any) => String(obj.id)} />
                <div className='jf-error-message'>{formData.categories.message}</div>
        </div>

        <div>
          <FormTextarea {...formData.description} className="jf-form-control jf-textarea" onChange={handleInputChange} onTurnDirty={handleTurnDirty} />
          <div className='jf-error-message'>{formData.description.message}</div>
        </div>
       
       <div className='jf-btn-container-form'>
        <ButtonWhite text='Cancelar' />
        <ButtonBlue text='Salvar' />
       </div>

        
    </form>

        </div>

        </section>
     </main>
    )
}