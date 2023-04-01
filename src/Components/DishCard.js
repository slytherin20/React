import {
  CLOUDANARY_API,
  NONVEG_LOGO,
  NOPHOTO,
  VEG_LOGO,
} from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  cartRestaurant,
  removeItem,
  removeRestaurant,
} from "../Store/CartSlice";
import Modal from "./Modal";
import { useState } from "react";
import Customizations from "./Customizations";

export default function DishCard({ dish, restaurantInfo }) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  let sizeVariations = dish.variantsV2?.variantGroups
    ? dish.variantsV2.variantGroups[0]?.variations
    : null;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  function addToCart(item) {
    if (sizeVariations) {
      toggleModal();
    } else {
      dispatch(addItem(item));
      dispatch(cartRestaurant(restaurantInfo));
    }
  }
  function toggleModal() {
    setIsVisibleModal(!isVisibleModal);
  }

  function removeFromCart(id) {
    dispatch(removeItem(id));
    if (cartItems.length === 1) {
      dispatch(removeRestaurant());
    }
  }
  return (
    <div className="m-4 relative">
      {
        <div className="w-full flex justify-between m-10" key={dish.id}>
          <div className="p-1 w-2/3">
            {dish.itemAttribute?.vegClassifier && (
              <div className="flex items-center text-sm">
                <img
                  src={
                    dish.itemAttribute.vegClassifier == "VEG"
                      ? VEG_LOGO
                      : NONVEG_LOGO
                  }
                  alt="vegetarian food"
                  width="15"
                  height="15"
                  className="w-4 h-4 mr-2"
                />
                {dish.itemAttribute.vegClassifier === "VEG" ? "VEG" : "NON-VEG"}
              </div>
            )}
            <h3 className="text-xl">{dish.name}</h3>
            {dish.price && <p className="text-sm">₹{dish.price / 100}</p>}

            <p>{dish.description}</p>
            {isVisibleModal && (
              <Modal>
                <Customizations
                  toggleModal={toggleModal}
                  isVisibleModal={isVisibleModal}
                  sizeVariations={sizeVariations}
                  dish={dish}
                  restaurantInfo={restaurantInfo}
                />
              </Modal>
            )}
          </div>
          {dish.imageId ? (
            <img
              src={CLOUDANARY_API + dish.imageId}
              alt="food"
              width="150"
              height="150"
              className="w-36 h-30"
            />
          ) : (
            <img
              src={NOPHOTO}
              alt="picture not available"
              width="150"
              height="150"
              className="w-36 h-30"
            />
          )}

          <button
            className="absolute bg-red-500 text-white w-20 h-8 rounded-md bottom-0 right-5 text-sm
          "
            onClick={() => addToCart(dish)}
          >
            Add
          </button>
          <button
            className="absolute bg-red-500 text-white w-20 h-8 rounded-md bottom-3 right-0 text-sm"
            onClick={() => removeFromCart(dish.id)}
          >
            Remove
          </button>
          <div className="absolute bg-red-500 text-white w-20 h-8 rounded-md bottom-0 right-5 text-sm"></div>
        </div>
      }
    </div>
  );
}
