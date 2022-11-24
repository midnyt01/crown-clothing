import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleCart = () => {
        if (isCartOpen === false) {
            setIsCartOpen(true)
        } else {
            setIsCartOpen(false)
        }
    }
    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;