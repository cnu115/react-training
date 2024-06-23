import { createContext, useState } from "react";


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

    const updateQuantity = (product, quantity) => {
        // debugger;
        const oldCart = [...cart];
        const { id } = product;
        const cartProduct = oldCart.find(c => c.id == id);
        if(cartProduct !== undefined){
            cartProduct.quantity = quantity;
            setCart(oldCart)
        }
    }

    const removeCartItem = (id) => {
        // debugger;
        const oldCart = [...cart];
        const productIndex = oldCart.findIndex(c => c.id == id);
        oldCart.splice(productIndex, 1);
        setCart(oldCart)
    }
    // console.log('cart', cart)

    return <CartContext.Provider value={{ cart, addToCart, getCartItemsCount, updateQuantity, removeCartItem }}>
        {children}
    </CartContext.Provider>
}