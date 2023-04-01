import { useSelector } from "react-redux";
import DishCard from "./DishCard";

function Cart() {
  let cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      {cartItems.map((dish) => (
        <DishCard dish={dish} key={dish.id} />
      ))}
    </div>
  );
}

export default Cart;
