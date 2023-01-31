import {ResponseType} from "@factory/types/ResponseType";

export type ApiPromiseResponseType<R> = Promise<ResponseType<R>>