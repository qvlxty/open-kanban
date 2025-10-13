import { AxiosRequestConfig, Method } from "axios"

export type RequestFxPayload = Pick<
    AxiosRequestConfig,
    'url' | 'method' | 'headers' | 'signal'
> & {
        query?: AxiosRequestConfig['params'],
        body?: AxiosRequestConfig['data'],
        accessToken?: string
    }