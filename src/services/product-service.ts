import axios, { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/request";

export function findAllProducts(){
    return axios.get('http://localhost:8080/products');
}

export function findPageProduct(name: string, page: number){
    const config : AxiosRequestConfig = {
        method: 'GET',
        url: '/products',

        params : {
            name: name,
            page: page,
            sort: 'name'
        }
    }

    return requestBackEnd(config);
}

export function findProductById(id: number){
    const config : AxiosRequestConfig = {
        method: 'GET',
        url: `/products/${id}`
    }

    return requestBackEnd(config);
}