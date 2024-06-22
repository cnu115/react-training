import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
     
    const getCartItemsCount = () => {
        return cart.reduce((accumulator, item) => {
            return accumulator + item.quantity;
        }, 0);
    }

    const addToCart = (product) => {

        const oldCart = [...cart];
        const { id } = product;
        const findProductIndex = cart.findIndex((c, index) => c.id == id);

        //if product not exist in the cart
        if (findProductIndex === -1) {
            product.quantity = 1;
            oldCart.push(product);
        } else {
            oldCart[findProductIndex].quantity = oldCart[findProductIndex].quantity + 1;
        }

        setCart(oldCart)
    }
    // console.log('cart', cart)

    return <CartContext.Provider value={{ cart, addToCart, getCartItemsCount }}>
        {children}
    </CartContext.Provider>
}