import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [itemIsOpen, setItemIsOpen] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setItemIsOpen(!itemIsOpen);
  };

  return (
    <div>
      <div
        className="w-3xl p-4 mx-auto my-4 bg-gray-100 shadow-lg cursor-grab"
        onClick={handleClick}
      >
        <div className="flex justify-between ">
          <span className="text-lg font-bold">
            {data.title}({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {itemIsOpen === false && showItems && (
          <ItemList itemData={data.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
