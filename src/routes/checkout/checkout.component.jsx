import { useContext } from 'react'
import CheckoutItem from '../../component/checkout-item/checkout-item.component'
import { CartContext } from '../../context/cart.context'

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles'

const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext)



    return (
        <CheckoutContainer>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <Total>TOTAL: ${cartTotal}</Total>
        </CheckoutContainer>
      );
    };

export default Checkout