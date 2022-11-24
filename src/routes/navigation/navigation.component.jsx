import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, LogoContainer, NavLinks,NavLink} from './navigation.styles'

const Navigation = () => {

  const { currentUser } = useContext(UserContext)

  const {isCartOpen } = useContext(CartContext)

  const signOutHandler = () => {
    signOutUser()
  }

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className="logo"/>
          </LogoContainer>
          <NavLinks>
              <NavLink to='/shop'>
                  Shop
              </NavLink>
              {
                currentUser ? (
                  <NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>
                ) : (
                  <NavLink to='/auth'>
                  Sign In
                  </NavLink>
                )
              }
              <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }


export default Navigation;