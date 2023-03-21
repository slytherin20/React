import { ARROW } from "../constants";
import DishCard from "./DishCard";
import NestedRestaurantSection from "./NestedRestaurantSection";
export default function RestaurantSection({
  items,
  visibleSection,
  toggleMenuSection,
}) {
  function toggleSection(name) {
    toggleMenuSection(name);
  }
  return (
    <section className="section border">
      <p
        className="text-xl flex flex-row justify-between mr-10"
        onClick={() => toggleSection(items.title)}
      >
        {items.title}
        <img
          src={ARROW}
          alt="arrow"
          className={
            visibleSection[items.title]
              ? "rotate-180 transition-transform duration-200"
              : "transition-transform duration-200"
          }
        />
      </p>
      {items.categories && visibleSection[items.title] && (
        <NestedRestaurantSection dishes={items.categories} />
      )}
      {items.itemCards && visibleSection[items.title] && (
        <div>
          {items.itemCards.map((el) => (
            <DishCard dish={el.card.info} key={el.card.info.id} />
          ))}
        </div>
      )}
    </section>
  );
}
