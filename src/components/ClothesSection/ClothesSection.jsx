import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  onCardClick,
  onAddClick,
  weatherData,
  clothingItems,
  shouldFilter = true,
}) {
  const filteredItems = shouldFilter
    ? clothingItems.filter((item) => item.weather === weatherData.type)
    : clothingItems;
  return (
    <div className="clothes-section">
      <div className="clothes-section__text-btn">
        <p className="clothes-section__text">Your items</p>
        <button className="clothes-section__add-btn" onClick={onAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__cards">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
