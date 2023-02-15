import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_API } from "../api_endpoint";
import { CLOUDANARY_API } from "../constants";
import RestaurantOverview from "./RestaurantOverview";
import RestaurantDetailsShimmer from "./RestaurantDetailsShimmer";

export default function RestaurantMenu() {
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  const { id } = useParams();
  let cuisines = restaurantDetails?.cuisines?.join(", ") || "";
  let location =
    restaurantDetails?.locality +
      ", " +
      restaurantDetails?.area +
      ", " +
      restaurantDetails?.city || "";

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    let res = await fetch(SWIGGY_RESTAURANT_API + id);
    let data = await res.json();
    setRestaurantDetails(data?.data);
  }

  if (!restaurantDetails) return null;
  else
    return restaurantDetails.length === 0 ? (
      <RestaurantDetailsShimmer />
    ) : (
      <div className="restaurant-menu">
        <div className="restaurant-overview">
          <img
            src={CLOUDANARY_API + restaurantDetails?.cloudinaryImageId}
            alt={restaurantDetails.name + " logo"}
            width="250"
            height="200"
          />
          <RestaurantOverview
            name={restaurantDetails.name}
            cuisines={cuisines}
            location={location}
            avgRating={restaurantDetails.avgRating}
            deliveryTime={restaurantDetails.sla.deliveryTime}
            costForTwo={restaurantDetails.costForTwoMsg}
          />
        </div>
        <div className="menu-list">
          {Object.values(restaurantDetails?.menu?.items).map((item) => {
            return (
              <div className="menu-item" key={item.id}>
                <div className="menuitem-desc">
                  <h3>{item.name}</h3>
                  <p>₹{item.price / 100}</p>
                  <p>{item.description}</p>
                </div>
                {item.cloudinaryImageId ? (
                  <img
                    src={CLOUDANARY_API + item.cloudinaryImageId}
                    alt="food"
                    width="150"
                    height="150"
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
}
