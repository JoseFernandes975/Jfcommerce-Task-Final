import axios from "axios";

export function findAllProducts(){
    return axios.get('http://localhost:8080/products');
}