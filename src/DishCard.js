import { CLOUDANARY_API, NONVEG_LOGO, NOPHOTO, VEG_LOGO } from "../constants";
export default function DishCard({ dish }) {
  let sizeVariations = dish.variantsV2?.variantGroups
    ? dish.variantsV2.variantGroups[0]?.variations
    : null;

  return (
    <div className="m-4 relative">
      {
        <div className="w-full flex justify-between m-10" key={dish.id}>
          <div className="p-1 w-2/3">
            {dish.itemAttribute?.vegClassifier && (
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
            )}
            <h3 className="text-xl">{dish.name}</h3>
            {dish.price && <p className="text-sm">₹{dish.price / 100}</p>}

            <p>{dish.description}</p>
            {sizeVariations && (
              <div>
                <p>Size Options:</p>
                {sizeVariations.map((size) => {
                  return (
                    <p
                      key={size.id}
                      className="flex flex-row justify-between w-1/2"
                    >
                      {size.name}
                      <label htmlFor={size.id}>
                        <input
                          type="radio"
                          key={size.id}
                          value={size.price}
                          id={size.id}
                          name="price"
                        />
                        ₹{size.price}
                      </label>
                    </p>
                  );
                })}
              </div>
            )}
          </div>
          {dish.imageId ? (
            <img
              src={CLOUDANARY_API + dish.imageId}
              alt="food"
              width="150"
              height="150"
              className="w-36 h-30"
            />
          ) : (
            <img
              src={NOPHOTO}
              alt="picture not available"
              width="150"
              height="150"
              className="w-36 h-30"
            />
          )}

          <button
            className="absolute bg-red-500 text-white w-20 h-8 rounded-md bottom-0 right-5 text-sm
          "
          >
            Add
          </button>
        </div>
      }
    </div>
  );
}
