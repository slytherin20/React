import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../api_endpoint";
function filterData(list, input) {
  if (input === "") return list;
  else {
    let result = list.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(input.toLowerCase())
    );
    return result;
  }
}
export default function RestaurantList({ searchInput }) {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  useEffect(() => {
    let filterResult = filterData(restaurantsList, searchInput);
    setFilteredList(filterResult);
  }, [searchInput]);

  async function getRestaurants() {
    let res = await fetch(SWIGGY_API);
    let restaurantsData = await res.json();
    restaurantsData =
      restaurantsData?.data?.cards[2]?.data?.data?.cards ||
      restaurantsData?.data?.cards[0]?.data?.data?.cards ||
      [];
    setRestaurantsList(restaurantsData);
    setFilteredList(restaurantsData);
  }
  if (!restaurantsList) return null; //Avoid rendering component: Early return
  if (!restaurantsList.length)
    return (
      <div className="shimmer-div">
        {Array(15)
          .fill(1, 0, 14)
          .map((el, i) => (
            <Shimmer key={i} />
          ))}
      </div>
    );
  if (!filteredList.length) return <h3>No restaurants found</h3>;
  return (
    <div className="restaurants">
      <h3>Restaurants</h3>
      <div className="restaurant-list">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} details={restaurant.data} />
        ))}
      </div>
    </div>
  );
}
