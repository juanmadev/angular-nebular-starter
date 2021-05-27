import { BOErrorRSInterface, BOErrorObjRSInterface } from './error-rs.interface';

export class BOErrorRS implements BOErrorRSInterface {
    error: BOErrorObjRS;
    constructor() {
        this.error = new BOErrorObjRS();
    }
}

export class BOErrorObjRS implements BOErrorObjRSInterface {
    code: number;
    message: string;
    description: string;
}
