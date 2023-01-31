import {globalDomain} from "../model";
import {RequestStatus} from "@common/enums/RequestStatus";
import {createEffect, Domain, Effect, sample, Store} from "effector";
import {findUnitFromDomain} from "./findUnitFromDomain";
import {createEvent} from "effector-next";
import {ServiceParams} from "@network/types/ServiceParams";
import {MetaData} from "@network/types/MetaData";
import {ApiPromiseResponseType} from "@factory/types/ApiPromiseResponseType";
import {ResponseType} from "@factory/types/ResponseType";

type GenerateEntityStoreType<R, E> = {
    domainName: string;
    fetchConfig: ServiceParams,
    formatResponse?: (args: R) => E | undefined;
    loadEntityApiRequest: (config:ServiceParams) => ApiPromiseResponseType<R>
    key: string
}

export const generateEntityStore = <R, E>({domainName, formatResponse, loadEntityApiRequest, key, fetchConfig}: GenerateEntityStoreType<R, E>) => {
    const localDomain = findUnitFromDomain<Domain>(domainName, globalDomain, 'domains') ??
        globalDomain.createDomain(domainName)

    const fetchFx = findUnitFromDomain<Effect<void, ResponseType<R>>>(`${key}Fx`, localDomain, 'effects') ??
        localDomain.createEffect({
        name: `${key}Fx`,
        handler: async () => await loadEntityApiRequest(fetchConfig)
    })

    const reset = createEvent()
    const $store = findUnitFromDomain<Store<{entity: undefined | E | R, metaData: MetaData}>>(key, localDomain, 'stores') ??
        localDomain.createStore<{entity: E | R | undefined , metaData: MetaData}>({
        entity: undefined,
        metaData: {
            status: RequestStatus.INITIAL,
            error: undefined
        }
    }, {name: key})
        .on(fetchFx.pending, (state, payload) => {
            const data = {
                entity: undefined,
                metaData: {
                    status: RequestStatus.LOADING,
                    error: undefined
                }
            }
            if (payload) {
                return {...data, metaData: {...data.metaData, status: RequestStatus.LOADING}}
            }

            return state
        })
        .on(fetchFx.doneData, (state, payload) => ({
            entity: formatResponse?.(payload.data) ?? payload.data,
            metaData: {
                status: RequestStatus.SUCCESS,
                error: undefined
            }
        }))
        .on(fetchFx.failData, (_, payload) => {
            return {
                entity: undefined,
                metaData: {
                    status: RequestStatus.FAILURE,
                    error: payload.message
                }
            }
        })
        .reset(reset);


    return {
        reset,
        $store,
        fetchFx,
    }
}


//
// const fetchFx = createEffect(async () => {
//     return new Promise(resolve => resolve)
// })
//
// const reset = createEvent()
//
// const store = createStore({...})
//     .on(fetchFx.pending, (state, payload) => {...})
//     .on(fetchFx.doneData, (state, payload) => {...})
//     .on(fetchFx.failData, (_, payload) => {...})
//     .reset(reset);
//
//
//
//
