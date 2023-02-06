import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
function AppLayout() {
  const [searchVal, setSearchVal] = useState("");

  function searchValHandler(val) {
    setSearchVal(val);
  }
  return (
    <div className="app">
      <Header searchResults={searchValHandler} />
      <Body searchInput={searchVal} />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
