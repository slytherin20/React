import React from "react";
import ReactDOM  from "react-dom/client";


function Header(){
    return <div className="header">
       <img src="https://raw.githubusercontent.com/slytherin20/React/Assignment3/logo.png" width="150" height="100" />
       <input type="search" className="search" />
       <img src="https://raw.githubusercontent.com/slytherin20/React/Assignment3/user.png"  width="40" height="40"/>
     </div>
}

function Container(){
    return <div className="container">
        <Header />
        <p>Container body</p>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);