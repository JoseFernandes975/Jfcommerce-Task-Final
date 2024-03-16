import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from '../localstorage/cart-repository';
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO){
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
  return cartRepository.get();
}

export function clearCart(){
    cartRepository.clear();
}

export function addProduct(product: ProductDTO){
    const cart = cartRepository.get(); 


    const item = cart.items.find(x => x.productId === product.id);

    if(!item){
      const newOrderItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
      cart.items.push(newOrderItem);
      cartRepository.save(cart);
      console.log(cart.total)
    }        
}

export function increaseQtd(productId: number){
  const cart = cartRepository.get();

  const product = cart.items.find(x => x.productId === productId);

  if(product){
    product.quantity++;
  }

  cartRepository.save(cart);
}

export function decreaseQtd(productId: number){
  const cart = cartRepository.get();

  const product = cart.items.find(x => x.productId === productId);

  if(product){
    product.quantity--;
     if(product.quantity < 1){
      cart.items = cart.items.filter(x => x.productId !== product.productId);
     }
  }

   cartRepository.save(cart);
  }
