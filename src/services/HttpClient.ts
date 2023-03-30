import axios, { AxiosInstance } from "axios";
import { Contants } from "../shared/Contants";

export const HttpClient: AxiosInstance = axios.create({
    baseURL: Contants.API_URL,
    timeout: 0,
  });


  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Error",error);
    return Promise.reject(error);
  });