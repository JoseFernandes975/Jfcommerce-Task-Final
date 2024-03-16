import { OrderDTO, OrderItemDTO } from "../models/order";
import { KEY_CART } from "../utils/system";

export function save(cart:OrderDTO){
  localStorage.setItem(KEY_CART, JSON.stringify(cart));
}

export function get() : OrderDTO {
  const result = JSON.parse(localStorage.getItem(KEY_CART) || '{"items":[]}') as OrderDTO;
 
  const cart = new OrderDTO();
  result.items.map(item => {
    cart.items.push(new OrderItemDTO(item.productId,item.quantity, item.name, item.price, item.imgUrl));
  })
  return cart;
}

export function clear(){
    localStorage.clear();
}