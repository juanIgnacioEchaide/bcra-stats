import axios, { AxiosError, AxiosResponse } from "axios";
import { ErrorHandler, SuccessHandler } from "./handlers";
import { token, URI } from "./uri";

const client = axios.create({
    baseURL: URI.BASE,
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    },
});

client.interceptors.response.use(
    (response: AxiosResponse) => SuccessHandler(response),
    (error: AxiosError) => ErrorHandler(error)
);

export { client };