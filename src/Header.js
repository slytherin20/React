import { useState } from "react";
import { Link } from "react-router-dom";
import { CART_ICON, FOOD_LOGO, USER_ICON } from "../constants";

export default function Header({ searchResults }) {
  const [search, setSearch] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  function changeSearchVal(e) {
    setSearch(e.target.value);
  }
  function changeLoginStatus() {
    setLoginStatus(!loginStatus);
  }
  return (
    <div className="header">
      <img src={FOOD_LOGO} width="150" height="100" />
      <div className="search-box">
        <input type="search" className="search" onChange={changeSearchVal} />
        <button type="button" onClick={() => searchResults(search)}>
          Search
        </button>
      </div>
      <div className="right-nav">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About Us</span>
        </Link>
        <Link to="/contact">
          <span>Contact Us</span>
        </Link>
        <img src={USER_ICON} width="40" height="40" />
        <img src={CART_ICON} alt="cart" />
        {loginStatus ? (
          <button type="button" onClick={changeLoginStatus}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button type="button" onClick={changeLoginStatus}>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
