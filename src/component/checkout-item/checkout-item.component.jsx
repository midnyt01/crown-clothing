import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const { id ,name, imageUrl, price, quantity} = cartItem

    const {cartItems, setCartItems} = useContext(CartContext)

    const decreaseQuantity = () => {
        if (quantity > 0) {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    cartItems[i].quantity -= 1
                    setCartItems([...cartItems])
                }
            }
        }
    }

    const increaseQuantity = () => {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    cartItems[i].quantity += 1
                    setCartItems([...cartItems])
                }
            }
    }

    const removeItemFromCart = () => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id) {
                cartItems.splice(i, 1)
                setCartItems([...cartItems])
            }
        }
    }

    return (
        <div className='checkout-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <span>{name}</span>
            <div>
                <span className='change-quantity' onClick={decreaseQuantity} >{'<'}</span>
                <span>{quantity}</span>
                <span className='change-quantity' onClick={increaseQuantity}>{'>'}</span>
            </div>
            <span>{price}</span>
            <span onClick={removeItemFromCart}>X</span>
        </div>
    )
}


export default CheckoutItem;