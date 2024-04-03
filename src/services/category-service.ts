import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/request";

export function findAllRequest(){
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/categories",
        withCredentials: false
    }

    return requestBackEnd(config);
}