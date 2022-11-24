import { useContext} from "react";
import { Link } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";

import {CartDropDown, CartItems, EmptyMessage} from './cart-dropdown.styles'

const CartDropdown = () => {

    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
    const toggleCart = () => {
        if (isCartOpen === false) {
            setIsCartOpen(true)
        } else {
            setIsCartOpen(false)
        }
    }

    return (
        <CartDropDown >
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => {
                            return (
                                <div key={item.id}>
                                    <CartItem cartItem={item} />
                                </div>
                            )
                        })
                    )
                    : <EmptyMessage>Your Cart is Empty</EmptyMessage>
                }
            </CartItems>
            <Link to='/checkout'>
                <Button onClick={toggleCart}>GO TO CHECKOUT</Button>
            </Link>
        </CartDropDown>
    )
}


export default CartDropdown;