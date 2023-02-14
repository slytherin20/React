export default function RestaurantOverview({
  name,
  cuisine,
  location,
  avgRating,
  deliveryTime,
  costForTwo,
}) {
  return (
    <div className="restaurant-desc">
      <h1>{name}</h1>
      <p>{cuisine}</p>
      <p>{location}</p>
      <div className="restaurant-subdesc">
        <span>{avgRating} stars</span>
        <span>{deliveryTime} mins delivery time</span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
}
