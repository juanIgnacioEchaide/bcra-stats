import { AxiosError, AxiosResponse } from 'axios';

const SuccessHandler = async (response: AxiosResponse) => {
    const res = await response
    console.log('RESPONSE', res)
    return res
}


const ErrorHandler = async (error: AxiosError) => {
    if (!error.response) {
        return Promise.reject(error);
    }
    switch (error.response.status) {
        case 401:
            throw Error("Unauthorized user");
        default:
            throw Error(error.message.toString());
    }
}

export { ErrorHandler, SuccessHandler }