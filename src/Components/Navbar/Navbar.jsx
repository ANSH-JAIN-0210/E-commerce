import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="Shop Logo" />
        <p>SHOPPER</p>
      </div>

      <div className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      <ul className={`nav-menu ${mobileMenuOpen ? "nav-menu-active" : ""}`}>
        <li className="list">
          <Link to="/" onClick={() => { setMenu("shop"); setMobileMenuOpen(false); }}>
            Shop
          </Link>
          {menu === "shop" ? <hr className="active-menu" /> : null}
        </li>
        <li className="list">
          <Link to="/mens" onClick={() => { setMenu("mens"); setMobileMenuOpen(false); }}>
            Men
          </Link>
          {menu === "mens" ? <hr className="active-menu" /> : null}
        </li>
        <li className="list">
          <Link to="/womens" onClick={() => { setMenu("womens"); setMobileMenuOpen(false); }}>
            Women
          </Link>
          {menu === "womens" ? <hr className="active-menu" /> : null}
        </li>
        <li className="list">
          <Link to="/kids" onClick={() => { setMenu("kids"); setMobileMenuOpen(false); }}>
            Kids
          </Link>
          {menu === "kids" ? <hr className="active-menu" /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <div className="nav-cart">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart Icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
