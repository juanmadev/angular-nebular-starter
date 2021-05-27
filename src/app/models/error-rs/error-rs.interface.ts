export interface BOErrorRSInterface {
    error: BOErrorObjRSInterface;
}

export interface BOErrorObjRSInterface {
    code: number;
    message: string;
    description: string;
}
