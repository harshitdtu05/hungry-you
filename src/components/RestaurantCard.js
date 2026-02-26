import { CDN_URL } from "../Utilities/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (
    <div className="m-2.5 p-2.5 rounded-2xl w-[300px] h-[500px] bg-orange-50 transition-transform duration-300 hover:-translate-1 hover:bg-orange-200 hover:shadow">
      <img
        alt="image"
        data-testid="resCards"
        className="w-[300px] rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold font-serif">{name}</h3>
      <div className="rating-cuisine">
        <ul>
          <li>{avgRating}⭐️</li>
          <li className="py-3">{cuisines.join(", ")}</li>
          <li>{costForTwo}</li>
        </ul>
      </div>
    </div>
  );
};

// Higher Order Component
export const hasMultiOutlet = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-3 py-2 bg-rose-400 text-white rounded-lg">
          Multiple Outlets
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
