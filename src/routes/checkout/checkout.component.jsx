import { useContext } from 'react'
import CheckoutItem from '../../component/checkout-item/checkout-item.component'
import { CartContext } from '../../context/cart.context'

import './checkout.styles.scss'

const Checkout = () => {

    const {cartItems, totalAmount} = useContext(CartContext)



    return (
        <div className='checkout-container'>
            <div className='header-container'>
                <h1>Product</h1>
                <h1>Description</h1>
                <h1>Quantity</h1>
                <h1>Price</h1>
                <h1>Remove</h1>
            </div>
            {
                cartItems.map((item) => {
                    return (
                        <CheckoutItem key={item.id} cartItem={item} />
                    )
                })
            }
            <h2>{`Total : ${totalAmount}`}</h2>
        </div>
    )
}

export default Checkout