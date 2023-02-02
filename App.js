import React from "react";
import ReactDOM  from "react-dom/client";
import Logo from "./logo.png";
import UserIcon from "./user.png";
// const header = React.createElement("div",{className:"title"},[
//     React.createElement("h1",null,"heading1"),
//     React.createElement("h2",null,"heading2"),
//     React.createElement("h3",null,"heading3")
// ])

// const header = <div className="title">
//     <h1>heading1</h1>
//     <h2>Heading2</h2>
//     <h3>Heading 3</h3>
// </div>

function Header(){
    return <div className="header">
       <img src={Logo} width="150" height="100" />
       <input type="search" className="search" />
       <img src={UserIcon} xwidth="40" height="40"/>
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