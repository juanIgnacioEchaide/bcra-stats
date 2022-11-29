import { BaseResponse } from "../../lib/models/api";
import { client } from "./api";
import { URI } from "./uri";

type Rate = {
    d: string,
    v: number
}

const services = {
    dollar: {
        getAllRates: (): BaseResponse<Rate[]> => {
            return client.get(URI.DOLLAR)
        },
    }
}

export { services }