import {UseEntityFactory} from "../common/factory/hooks";
import {ISomeDataHooks} from "./types/ISomeDataHooks";
import {ServiceParams} from "@network/types/ServiceParams";
import {instance} from "../../common/network/instance";
import {ApiPromiseResponseType} from "@factory/types/ApiPromiseResponseType";

const service = ({pathParams, reqBody}: ServiceParams<undefined, undefined>): ApiPromiseResponseType<{text: string}> => {
    // return await instance.get({
    //     url: 'example/',
    //
    //     params: {taskId: '1'},
    //     data: reqBody
    // })
    return instance.get('example')
}


export const someDataDL = (): ISomeDataHooks => {
    const factory = new UseEntityFactory<{text: string}>({namespaceName: 'someData'})

    return {
        useSomeData: factory.getEntity(service)
    }
}