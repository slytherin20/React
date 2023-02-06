import { useState } from "react";
import { CART_ICON, FOOD_LOGO, USER_ICON } from "./constants";

export default function Header({ searchResults }) {
  const [search, setSearch] = useState("");

  function changeSearchVal(e) {
    setSearch(e.target.value);
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
        <img src={USER_ICON} width="40" height="40" />
        <img src={CART_ICON} alt="cart" />
      </div>
    </div>
  );
}
