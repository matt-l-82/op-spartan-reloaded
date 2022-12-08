import React, { useState } from "react";

import { Fragment, useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";

//IMAGES
import { images } from "../../constants/index";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../cart-icon/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import Contact from "../../routes/contact/contact.component";

import Permission from "../permission/Permission.component";

//REACT ICONS
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

//STYLES
import "./Navigation.styles.scss";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <img className="logo" src={images.logo} alt="" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={
            click ? "nav-links-container active" : "nav-links-container"
          }
        >
          <Permission roles={["logged-in"]} type="one-of">
            <NavLink
              to="/kinship"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              KINSHIP
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              SUPPORT
            </NavLink>
            <NavLink
              to="/missions"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              MISSIONS
            </NavLink>
            <NavLink
              to="/allies"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              ALLIES
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              EVENTS
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              SHOP
            </NavLink>
            <NavLink
              to="/subscribe"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              SUBSCRIBE
            </NavLink>
          </Permission>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </ul>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
