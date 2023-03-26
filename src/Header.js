import { useState } from "react";
import { Link } from "react-router-dom";
import { CART_ICON, USER_ICON, FOOD_LOGO, SEARCH_ICON } from "../constants";
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
    <div className="flex w-full justify-between items-center shadow-md flex-col sm:flex-row p-2">
      <div className="flex items-center flex-col-reverse sm:flex-row">
        <p className="text-2xl sm:text-4xl text-red-600">Zungry</p>
        <img src={FOOD_LOGO} className="w-14 h-14" />
      </div>
      <div className="h-10 shadow-md rounded-lg flex flex-row items-center w-full sm:w-96">
        <input
          type="search"
          className="h-full rounded-lg w-11/12 p-1 outline-none "
          placeholder="Search for a restaurant"
          onChange={changeSearchVal}
        />
        <img
          src={SEARCH_ICON}
          alt="search"
          onClick={() => searchResults(search)}
          width="24"
          height="24"
          className="w-7 h-7"
        />
      </div>
      <div className="flex flex-row w-full sm:w-80 mr-1 justify-between">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About Us</span>
        </Link>
        <Link to="/contact">
          <span>Contact Us</span>
        </Link>
        <img src={CART_ICON} alt="cart" className="w-7 h-7" />
        {loginStatus ? (
          <>
            <img src={USER_ICON} width="40" height="40" />
            <button type="button" onClick={changeLoginStatus}>
              Logout
            </button>
          </>
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
