import { useContext} from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";

import './cart-dropdown.styles.scss'
import { Link } from "react-router-dom";

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
        <div className="cart-dropdown-container" >
            <div className="cart-items">
                {
                    cartItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <CartItem cartItem={item} />
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/checkout'>
                <Button onClick={toggleCart}>GO TO CHECKOUT</Button>
            </Link>
        </div>
    )
}


export default CartDropdown;