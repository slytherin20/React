export function addFoodItem(state, action) {
  let food = action.payload;
  food.selectedQty = 1;
  state.items.push(food);
}

export function removeFoodItem(state, action) {
  let items = state.items.map((item) => {
    if (item.id == action.payload) {
      if (item.selectedQty != 1) {
        return {
          ...item,
          selectedQty: item.selectedQty - 1,
        };
      }
    } else return item;
  });
  items = items.filter((item) => item != null);
  state.items = items;
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

export function updateFoodItemCount(state, action) {
  state.items = state.items.map((item) => {
    let food = item;
    if (food.id === action.payload) {
      food.selectedQty = food.selectedQty + 1;
    }
    return food;
  });
}
