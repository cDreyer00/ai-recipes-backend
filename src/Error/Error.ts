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

export function anyError(err: any) {
    let e = error(err);
    if(!e) e = httpError(err);
    return e;
}

export type HttpError = {
    message: string;
    status: number;
    response: {
        data: any
    }
}