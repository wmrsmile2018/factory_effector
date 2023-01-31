import hash from 'object-hash';
import {useMemo} from "react";
import {generateEntityStore} from "@models/utils/generateEntityStore";
import {ServiceParams} from "@network/types/ServiceParams";
import {useEvent, useStore} from "effector-react";
import {UseEntity} from "../types/UseEntity";
import {ApiPromiseResponseType} from "@factory/types/ApiPromiseResponseType";

export class UseEntityFactory<R, E extends {} = {}> {
    readonly namespaceName: string;
    constructor(config: {
        namespaceName: string
    }) {
        this.namespaceName = config.namespaceName
    }

    getEntity = (service: (config: ServiceParams) => ApiPromiseResponseType<R>): UseEntity<R, E> => {
        return ({fetchConfig, formatResponse}) => {
            const key = hash(fetchConfig?.pathParams ?? {})

            const {reset, $store, fetchFx} =  useMemo(() => {
                return generateEntityStore({
                    domainName: this.namespaceName,
                    formatResponse,
                    loadEntityApiRequest: service,
                    fetchConfig,
                    key
                })
            }, [fetchConfig, formatResponse, key])

            const {entity, metaData} = useStore($store)
            const fetch = useEvent(fetchFx)

            return {
                reset,
                entity,
                fetch,
                metaData,
            }
        }
    }
}

