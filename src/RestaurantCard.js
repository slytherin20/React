import { CLOUDANARY_API } from "./constants";

export default function RestaurantCard({ details }) {
  const { name, cuisines, totalRatingsString, cloudinaryImageId } = details;
  return (
    <div className="restaurant-card">
      <img src={CLOUDANARY_API + cloudinaryImageId} width="200" height="200" />
      <h3>{name}</h3>
      <p>{cuisines.slice(0, 5).join(", ")} </p>
      <p>{totalRatingsString}</p>
    </div>
  );
}
