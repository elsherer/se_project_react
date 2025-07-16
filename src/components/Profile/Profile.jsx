import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onCardClick, onAddClick, weatherData, clothingItems }) {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothesSection">
        <ClothesSection
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          weatherData={weatherData}
          clothingItems={clothingItems}
        />
      </div>
    </div>
  );
}

export default Profile;
