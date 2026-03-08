import { Cart } from "./models/cart.model";

const cart = new Cart();

cart.cartItem.push({
    product: {
        id: 1,
        name: "Moto elétrica",
        price: 5000,
        category: {
            id: 1,
            name: "Veículos"
        }
    },
    quantity: 1
},
{
    product: {
        id: 23,
        name: "Sandália xô boi",
        price: 50,
        category: {
            id: 10,
            name: "Calçados"
        },
    },
    quantity: 2
},
{
    product: {
        id: 34,
        name: "Boia de flamingo",
        price: 23.99,
        category: {
            id: 11,
            name: "Praia e piscina"
        },
    },
    quantity: 2
})

function getTotalItems(cart: Cart) {
    let somaItems = 0;
    cart.cartItem.forEach(item => {
    somaItems += item.quantity;
    })
    return somaItems;
}

function getTotalPrice(cart: Cart) {
    let somaPreço = 0;
    cart.cartItem.forEach(item => {
        somaPreço += item.product.price * item.quantity;
    })
    return somaPreço;
}

const totalItems = getTotalItems(cart);
const totalPrice = getTotalPrice(cart);

console.log('Total de itens no carrinho:', totalItems);
console.log('Total do preço dos itens no carrinho:', totalPrice)