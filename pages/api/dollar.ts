import { services } from "./services"

const getAllDollarRates = async () => {
    const data = await services.dollar.getAllRates()
    return data
}

export { getAllDollarRates }