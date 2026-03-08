import { Category } from "./category.model";

export interface Product {
    id: number,
    name: string,
    price: number,
    category: Category
}

export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: Category
    )
    {};
}