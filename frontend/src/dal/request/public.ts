import { attach, createEffect } from "effector";
import { ACCESS_TOKEN_KEY } from "./const";
import { createPersistedStore } from "@/shared/lib/create-persisted-store";
import { AxiosError, AxiosResponse } from "axios";
import { RequestFxPayload } from "./types";

export const loadDalFx = createEffect<void,void,Error>()

export const accessTokenApi = createPersistedStore<string | null>({
    key: ACCESS_TOKEN_KEY,
    defaultValue: null,
    serializer: (v) => v || '',
    deserializer: (v) => v
})

export const requestFx = createEffect<
    RequestFxPayload,
    AxiosResponse,
    AxiosError
>()

export const authRequestFx = attach({
    effect: requestFx,
    source: accessTokenApi.$store,
    // @ts-ignore
    mapParams: (params: 
        Exclude<RequestFxPayload, 
        'accessToken'
    >, accessToken) => ({
        accessToken,
        ...params,
    }),
})