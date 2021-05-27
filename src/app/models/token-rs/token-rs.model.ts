import {
    BOTokenRSInterface, BOTokenSubRSInterface,
    BOTokenGroupRSInterface, BOTokenRoleRSInterface,
} from './token-rs.interface';

export class BOTokenRS implements BOTokenRSInterface {
    sub: BOTokenSubRS;
    iat: number;
    exp: number;
    constructor() {
        this.sub = new BOTokenSubRS();
    }
}

export class BOTokenSubRS implements BOTokenSubRSInterface {
    id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    enabled: boolean;
    groups: BOTokenGroupRS[];
    constructor() {
        this.groups = new Array<BOTokenGroupRS>();
    }
}

export class BOTokenGroupRS implements BOTokenGroupRSInterface {
    id: string;
    name: string;
    roles: BOTokenRoleRS[];
    constructor() {
        this.roles = new Array<BOTokenRoleRS>();
    }
}

export class BOTokenRoleRS implements BOTokenRoleRSInterface {
    id: string;
    name: string;
    functionalities: string[];
}