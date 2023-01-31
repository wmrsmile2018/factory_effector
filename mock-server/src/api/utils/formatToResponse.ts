export const formatToResponse = <T>(data: T): Response<T> => {
    return {
        success: true,
        data,
    };
};
type Response<T> = {
    success: boolean;
    data: T;
};
