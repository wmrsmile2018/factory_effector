import {RequestStatus} from "@common/enums/RequestStatus";
import {AxiosError} from "axios";

export type MetaData = {
    status: RequestStatus;
    error: any
    // loadTime: string | undefined;
    // error: AppNetworkError | undefined;
    // requestParams: ApiParams;
    // requestId?: string;
};
