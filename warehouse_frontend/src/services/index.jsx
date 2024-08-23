import axios from "axios";

export const api_key = '483c9b06eea71d6e98ee4cb1b97b9ea0';
export const api = axios.create({
    baseURL : 'https://api.warehouse.org/'
});