import { CLOUDANARY_API, NONVEG_LOGO, NOPHOTO, VEG_LOGO } from "../constants";
export default function DishCard({ dish }) {
  return (
    <div className="m-4">
      {dish.price > 0 && (
        <div
          className="w-full flex justify-between m-3 border border-gray-300"
          key={dish.id}
        >
          <div className="p-1">
            <div className="flex items-center text-sm">
              <img
                src={
                  dish.itemAttribute.vegClassifier == "VEG"
                    ? VEG_LOGO
                    : NONVEG_LOGO
                }
                alt="vegetarian food"
                width="15"
                height="15"
                className="w-4 h-4 mr-2"
              />
              {dish.itemAttribute.vegClassifier === "VEG" ? "VEG" : "NON-VEG"}
            </div>
            <h3 className="text-xl">{dish.name}</h3>
            <p className="text-sm">₹{dish.price / 100}</p>
            <p>{dish.description}</p>
          </div>
          {dish.imageId ? (
            <img
              src={CLOUDANARY_API + dish.imageId}
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
      )}
    </div>
  );
}
