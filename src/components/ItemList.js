import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../Utilities/constants";
import { addItem } from "../Utilities/cartSlice";

const ItemList = ({ itemData }) => {
  //   console.log(itemData);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {itemData.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b p-2 m-5 flex justify-between"
          data-testid="foodItems"
        >
          <div className="w-9/12">
            <span className="font-bold py-2 text-lg">
              {item.card.info.name}
            </span>
            <span className="text-lg"> - ₹{item.card.info.price / 100}</span>
            <div className="py-2.5 text-s">
              <span className="text-green-600 font-bold">
                ⭐️{item.card.info.ratings.aggregatedRating.rating}
              </span>
              <span>
                ({item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
            </div>
            <div className="text-s py-3.5 text-gray-500 font-serif">
              {item.card.info.description}
            </div>
          </div>
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-green-600 px-8 py-2 rounded-lg shadow-lg font-bold hover:bg-gray-500"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
