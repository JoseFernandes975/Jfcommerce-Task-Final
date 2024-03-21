import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authService from '../services/auth-service';
import { history } from "./history";

export function requestBackEnd(config: AxiosRequestConfig){

    

   const headers = config.withCredentials 
    ? {
        ...config.headers,
       Authorization: "Bearer " + authService.getAccessToken()
    }
    : config.headers;

    return axios({...config, baseURL: BASE_URL, headers: headers});
}

axios.interceptors.response.use(
   function(response){
    return response;
   },
    function(error){
        if(error.response.status === 401){
            history.push('/login');
        }
        if(error.response.status === 403){
            history.push('/catalog');
        }
       return Promise.reject(error);
    }
)