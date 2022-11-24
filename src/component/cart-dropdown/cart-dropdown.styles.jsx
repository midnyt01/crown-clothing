import styled from 'styled-components'
import {BaseButton, GoogleSignInButton, InvertedButton} from '../button/button.styles'

export const CartDropDown = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin: auto;
  }
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: 0;
`

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`


// .cart-dropdown-container {

  
//     .empty-message {

//     }
  
//     .cart-items {

//     }
  
//     button {
//       margin-top: auto;
//       font-size: 15px;
//       letter-spacing: 0;
//     }
//   }
  