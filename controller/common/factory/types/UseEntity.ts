import {ServiceParams} from "@network/types/ServiceParams";
import {Event} from "effector";
import {MetaData} from "@network/types/MetaData";

/**
 * @param R Response
 * @param E Entity
 * @param P Parameters
 * @param B RequestBody
 */

export type UseEntity<R, E = Partial<R>> = (props: {
    fetchConfig: ServiceParams
    formatResponse?: (resp: R) => E | undefined;
}) => {
    entity: E | R | undefined;
    metaData: MetaData
    reset:  Event<void>;
    fetch: VoidFunction;
    // fetchFx: Effect<void, {data: R}, Error>;
    // $store: Store<{entity: R | E | undefined, metaData: MetaData}>
}