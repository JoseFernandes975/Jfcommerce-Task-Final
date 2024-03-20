import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/request";

export function findByIdOrder(orderId: number){
    const config: AxiosRequestConfig = {
        method: 'GET',
        url:`orders/${orderId}`,
        withCredentials: true
    }

    return requestBackEnd(config);
}