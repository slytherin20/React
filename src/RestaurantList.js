import RestaurantCard from "./RestaurantCard";
import { restaurants } from "./constants";

function fetchData(searchVal) {
  if (searchVal)
    return restaurants.filter(
      (restaurant) => restaurant.data.name == searchVal
    );
  else return restaurants;
}
export default function RestaurantList({ searchInput }) {
  let restaurantList = fetchData(searchInput);
  return (
    <div className="restaurants">
      <h3>Restaurants</h3>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} details={restaurant.data} />
        ))}
      </div>
    </div>
  );
}
