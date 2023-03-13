import { useParams } from "react-router-dom";
import { CLOUDANARY_API, NOPHOTO } from "../constants";
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
        <div className="w-full h-72 bg-red-700 flex items-center justify-center">
          <img
            src={CLOUDANARY_API + restaurantDetails?.cloudinaryImageId}
            alt={restaurantDetails.name + " logo"}
            width="300"
            height="250"
            className="h-52 w-64 sm:h-64 sm:w-80"
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
        <div className="m-4">
          <p className="text-2xl">Menu</p>
          {Object.values(restaurantDetails?.menu?.items).map((item) => {
            return (
              item.price > 0 && (
                <div
                  className="w-full flex justify-between m-3 border border-gray-300"
                  key={item.id}
                >
                  <div className="p-1">
                    <h3 className="text-xl">{item.name}</h3>
                    <p className="text-sm">₹{item.price / 100}</p>
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
                    <img
                      src={NOPHOTO}
                      alt="picture not available"
                      width="150"
                      height="150"
                    />
                  )}
                </div>
              )
            );
          })}
        </div>
      </div>
    );
}
