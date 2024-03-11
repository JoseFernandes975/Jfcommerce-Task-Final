import './styels.css';
import { ProductDTO } from '../../models/product';

type Props = {
 product: ProductDTO
}

export default function ProductCard({ product }: Props){
    
    return(
        <div className="jf-container-card">
            <div className='jf-item-top jf-line-bd-bottom'>
                <img src={product.imgUrl} alt={product.name} />
            </div>

            <div className='jf-item-bottom'>
                <h2 className='jf-price'>R$ {product.price.toFixed(2)}</h2>
                <h4 className='jf-name'>{product.name}</h4>
            </div>

        </div>
    );
}