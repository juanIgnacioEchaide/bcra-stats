import { AxiosResponse } from "axios"

type BaseResponse<T> = Promise<AxiosResponse<T>>

export type { BaseResponse }