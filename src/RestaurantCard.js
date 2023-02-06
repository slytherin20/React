export default function RestaurantCard({details}){
    const { name,cuisines,totalRatingsString,cloudinaryImageId} = details;
    return <div className="restaurant-card">
        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} width="200" height="200"/>
        <h3>{name}</h3>
        <p>{cuisines.slice(0,5).join(", ")} </p>
        <p>{totalRatingsString}</p>
    </div>
}