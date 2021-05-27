export interface BOTokenRSInterface {
    sub: BOTokenSubRSInterface;
    iat: number;
    exp: number;
}

export interface BOTokenSubRSInterface {
    id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    enabled: boolean;
    groups: BOTokenGroupRSInterface[];
}

export interface BOTokenGroupRSInterface {
    id: string;
    name: string;
    roles: BOTokenRoleRSInterface[];
}

export interface BOTokenRoleRSInterface {
    id: string;
    name: string;
    functionalities: string[];
}