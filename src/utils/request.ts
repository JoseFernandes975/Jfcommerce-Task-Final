import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./data";

export function requestBackEnd(config: AxiosRequestConfig){
   config = {
    ...config,
    baseURL: BASE_URL
   }

    return axios(config);
}