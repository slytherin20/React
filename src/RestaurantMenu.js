import { useParams } from "react-router-dom";
import { CLOUDANARY_API } from "../constants";
import RestaurantOverview from "./RestaurantOverview";
import RestaurantDetailsShimmer from "./RestaurantDetailsShimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu.js";

export default function RestaurantMenu() {
  const { id } = useParams();
  let restaurantDetails = useRestaurantMenu(id);
  let cuisines = restaurantDetails?.cuisines
    ? restaurantDetails?.cuisines?.join(", ")
    : "";
  let location = restaurantDetails?.locality
    ? restaurantDetails?.locality +
      ", " +
      restaurantDetails?.area +
      ", " +
      restaurantDetails?.city
    : "";

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
