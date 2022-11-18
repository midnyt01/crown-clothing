import { Fragment, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CardIcon from "../../component/card-icon/card-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'

const Navigation = () => {

  const { currentUser } = useContext(UserContext)

  const {isCartOpen} = useContext(CartContext)

  const signOutHandler = () => {
    signOutUser()
  }

    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <CrwnLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
              <Link className="nav-link" to='/shop'>
                  Shop
              </Link>
              {
                currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                ) : (
                  <Link className="nav-link" to='/auth'>
                  Sign In
                  </Link>
                )
              }
              <CardIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
          {/* <CartDropdown /> */}
        </div>
        <Outlet />
      </Fragment>
    )
  }


export default Navigation;