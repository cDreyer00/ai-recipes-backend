export function error(err: Error) {
    try{
        return err.message;
    } catch {
        return undefined;
    }
}

export function httpError(err: HttpError) {
    try{
        return err.response.data;
    } catch {
        return undefined;
    }
}

export type HttpError = {
    message: string;
    status: number;
    response: {
        data: any
    }
}