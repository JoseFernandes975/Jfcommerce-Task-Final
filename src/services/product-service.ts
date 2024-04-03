import axios, { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/request";
import { ProductDTO } from "../models/product";

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

export function insertRequest(product: ProductDTO){
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/products",
        data: product,
        withCredentials: true
    }

    return requestBackEnd(config);
}