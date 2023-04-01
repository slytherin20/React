import { createSlice } from "@reduxjs/toolkit";
import {
  addFoodItem,
  clearCart,
  clearSavedRestaurant,
  removeFoodItem,
  savedRestaurantCart,
  updateFoodItemCount,
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
    updateItemCount: updateFoodItemCount,
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  emptyCart,
  cartRestaurant,
  removeRestaurant,
  updateItemCount,
} = cartSlice.actions;
