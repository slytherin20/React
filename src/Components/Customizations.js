import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, cartRestaurant } from "../Store/CartSlice";

export default function Customizations({
  toggleModal,
  isVisibleModal,
  sizeVariations,
  dish,
  restaurantInfo,
}) {
  const [selectedOptions, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  function addItemToCart() {
    let selectedItem = dish;
    selectedItem.selectedSize = selectedOptions;
    dispatch(addItem(selectedItem));
    dispatch(cartRestaurant(restaurantInfo));
    toggleModal();
  }
  function selectMenuOption(e) {
    setSelectedOption({
      [e.target.className]: e.target.value,
    });
  }
  return (
    <div className="w-3/5 h-96 bg-white rounded-md">
      <button onClick={toggleModal}>Cancel</button>
      <p>Size Options:</p>
      <div onChange={(e) => selectMenuOption(e)}>
        {isVisibleModal &&
          sizeVariations.map((size) => {
            return (
              <p key={size.id} className="flex flex-row justify-between w-1/2">
                {size.name}
                <label htmlFor={size.id}>
                  <input
                    type="radio"
                    key={size.id}
                    value={size.price}
                    id={size.id}
                    name="price"
                    className={size.name}
                  />
                  ₹{size.price}
                </label>
              </p>
            );
          })}
      </div>
      <button onClick={addItemToCart}>Continue</button>
    </div>
  );
}
