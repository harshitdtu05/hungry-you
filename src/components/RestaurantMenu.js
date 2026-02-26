import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utilities/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, totalRatingsString } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const allowedTypes = [
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
  ];

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      allowedTypes.includes(c?.card?.card?.["@type"])
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">{name}</h1>

      <div className="bg-orange-100 rounded-full p-6 text-center mb-8 max-w-md mx-auto transition-transform duration-300 hover:bg-orange-200">
        <h3 className="text-xl font-semibold mb-2">
          {avgRating}⭐️ ({totalRatingsString})
        </h3>
        <h5 className="text-gray-700">{cuisines.join(", ")}</h5>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 my-5">Menu</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            // controlled component
            <RestaurantCategory
              key={category.card.card.title}
              data={category.card.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
