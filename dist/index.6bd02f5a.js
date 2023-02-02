const h1 = React.createElement("h1", {
    className: "heading"
}, "Hello World");
const ul = React.createElement("ul", {
    className: "fruits"
}, [
    React.createElement("li", {
        className: "apple",
        key: "apple"
    }, "Apple"),
    React.createElement("li", {
        className: "orange",
        key: "orange"
    }, "Orange"),
    React.createElement("li", {
        className: "banana",
        key: "banana"
    }, "Banana"),
    React.createElement("li", {
        className: "mango",
        key: "mango"
    }, "Mango"),
    React.createElement("li", {
        className: "grapes",
        key: "grapes"
    }, "Grapes")
]);
const container = React.createElement("div", {
    id: "container"
}, [
    h1,
    ul
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
