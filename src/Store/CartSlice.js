import { createSlice } from "@reduxjs/toolkit";
import {
  addFoodItem,
  clearCart,
  clearSavedRestaurant,
  removeFoodItem,
  savedRestaurantCart,
} from "../Reducers/cartReducers";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurantDetails: {},
  },
  reducers: {
    addItem: addFoodItem,
    removeItem: removeFoodItem,
    emptyCart: clearCart,
    cartRestaurant: savedRestaurantCart,
    removeRestaurant: clearSavedRestaurant,
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  emptyCart,
  cartRestaurant,
  removeRestaurant,
} = cartSlice.actions;
