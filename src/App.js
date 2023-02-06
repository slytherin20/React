import React from "react";
import ReactDOM  from "react-dom/client";
import CartIcon from "../assets/carts.png";
import RestaurantList from "./RestaurantList";
function Header(){
    return <div className="header">
       <img src="https://raw.githubusercontent.com/slytherin20/React/Assignment3/logo.png" width="150" height="100" />
       <input type="search" className="search" />
       <div className="right-nav">
       <img src="https://raw.githubusercontent.com/slytherin20/React/Assignment3/user.png"  width="40" height="40"/>
       <img src={CartIcon} alt="cart" />
       </div>
     </div>
}

function Body(){
    return <RestaurantList />
} 

function Footer(){
    return <h4>Footer</h4>
}
function AppLayout(){
return <div className="app">
    <Header />
    <Body />
    <Footer />
</div>

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);