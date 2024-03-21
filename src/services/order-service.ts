import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/request";
import { OrderDTO } from "../models/order";

export function findByIdOrder(orderId: number){
    const config: AxiosRequestConfig = {
        method: 'GET',
        url:`orders/${orderId}`,
        withCredentials: true
    }

    return requestBackEnd(config);
}

export function sendOrder(order: OrderDTO){
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'orders',
    withCredentials: true,
    data: order
  }

  return requestBackEnd(config);
}