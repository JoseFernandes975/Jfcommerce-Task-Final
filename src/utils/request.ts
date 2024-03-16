import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";

export function requestBackEnd(config: AxiosRequestConfig){
   config = {
    ...config,
    baseURL: BASE_URL
   }

    return axios(config);
}