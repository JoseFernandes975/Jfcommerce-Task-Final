import { AxiosRequestConfig } from "axios";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackEnd } from "../utils/request";
import * as tokenRepository from '../localstorage/token-repository';
import QueryString from "qs";
import { AccessTokenPayloadDTO } from "../models/token";
import jwtDecode  from 'jwt-decode';

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

 export function saveToken(token: string){
    tokenRepository.saveToken(token);
 }

 export function getAccessToken(){
   return tokenRepository.get();
 }

 export function logout() {
    tokenRepository.remove();
 }

 export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
   const token = getAccessToken();

   if(token){
      return (jwtDecode(token) as AccessTokenPayloadDTO)
   }

   return undefined;
 }

 export function isAuthenticated(): boolean {
   const tokenPayload = getAccessTokenPayload();
    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
 }