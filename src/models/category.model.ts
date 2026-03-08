export interface Category {
    id: number,
    name: string
}

export class Category {
    constructor(
        public id: number,
        public name: string
    )
    {};
}