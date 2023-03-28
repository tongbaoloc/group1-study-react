import axios from "axios";

export const ApiClient = axios.create({
  baseURL: "https://6422ff5477e7062b3e285857.mockapi.io/api/v1/",
});
