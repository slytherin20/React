export function addFoodItem(state, action) {
  state.items.push(action.payload);
}

export function removeFoodItem(state, action) {
  state.items = state.items.filter((item) => item.id !== action.payload);
}

export function clearCart(state) {
  state.items = [];
}
export function savedRestaurantCart(state, action) {
  state.restaurantDetails = action.payload;
}

export function clearSavedRestaurant(state) {
  state.restaurantDetails = {};
}
