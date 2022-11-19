import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
   if (cartItems.length === 0) {
    return [{...productToAdd, quantity: 1}]
   }
   for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === productToAdd.id) {
        cartItems[i].quantity++
        return [...cartItems]
    }
   }
   return [...cartItems, {...productToAdd, quantity : 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    setCartItems: () => {},
    addItemToCard: () => {},
    cartCount: 0,
    setCartCount: () => {},
    totalAmount: 0,
})

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems ] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const addItemToCard = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newTotalAmount = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        console.log({newTotalAmount})
        setTotalAmount(newTotalAmount)
        setCartCount(newCartCount)
    },[cartItems])
    
    

    const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCard, cartCount, setCartCount, totalAmount } 

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}