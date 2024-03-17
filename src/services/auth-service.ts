import { AxiosRequestConfig } from "axios";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackEnd } from "../utils/request";
import QueryString from "qs";

 export function requestLogin(loginData: CredentialsDTO){

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const data = QueryString.stringify({
        ...loginData,
        grant_type: "password"
    });

    const config: AxiosRequestConfig = {
        method: 'POST',
        url: '/oauth/token',
        headers: headers,
        data: data
    }

    return requestBackEnd(config);
 }