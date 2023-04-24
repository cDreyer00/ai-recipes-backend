export function error(err) {
    try {
        return err.message;
    }
    catch {
        return undefined;
    }
}
export function httpError(err) {
    try {
        return err.response.data;
    }
    catch {
        return undefined;
    }
}
