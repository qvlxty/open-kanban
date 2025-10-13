import { createDomain, Domain, sample } from 'effector'

export const createPersistedStore = <T>(
    {
        d = createDomain(),
        defaultValue,
        key,
        serializer = JSON.stringify,
        deserializer = JSON.parse
    } : {
        d?: Domain, 
        defaultValue: T, 
        key: string,
        serializer?: (v: T) => string
        deserializer?: (key: string) => T
    }) => {
    const $store = d.store<T>(defaultValue)

    const loadFx = d.effect<void, T, Error>()
    const saveFx = d.effect<T, void, Error>()

    $store
        .on(loadFx.doneData, (_, d) => d)
        .on(saveFx.done,(_, {params}) => params)

    sample({
        clock: $store.updates,
        target: saveFx
    })


    loadFx.use(() => {
        const d = localStorage.getItem(key)
        if (d === null) {
            return defaultValue
        }
        return deserializer(d)
    })

    saveFx.use((p) => {
        localStorage.setItem(key, serializer(p))
    })

    return {
        loadFx,
        saveFx,
        $store
    }

}
