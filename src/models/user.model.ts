type Role = "ADMIN" | "CUSTOMER";

export interface User {
    id: number,
    username: string,
    email: string,
    role: Role
}

export class User {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public role: Role
    )
    {};
}