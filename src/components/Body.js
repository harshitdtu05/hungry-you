import { useState, useEffect } from "react";
import RestaurantCard, { hasMultiOutlet } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantWithMultiOutlet = hasMultiOutlet(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.626786706057906&lng=77.43839445954649&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data);
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(restaurants);
  };

  const userStatus = useOnlineStatus();

  if (!userStatus) {
    return <h1>Looks like you are offline!! Please check your connection</h1>;
  }

  // Conditional Rendering where '?' is a ternary operator
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-row">
        <div className="flex justify-center basis-1/3">
          <button
            className="p-2.5 m-6 text-xl font-semibold rounded-lg bg-orange-200 transition-transform duration-300 hover:-translate-y-1 hover:bg-orange-400 shadow-md hover: shadow-lg"
            data-testid="topRatedRes"
            onClick={() => {
              const currList = restaurants.filter(
                (Restaurant) => Restaurant.info.avgRating > 4
              );
              setFilteredList(currList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="flex justify-center basis-2/3">
          <div className="flex items-center justify-center w-full max-w-2xl mx-auto mb-6">
            <div className="relative w-full">
              <input
                className="w-full border border-gray-300 rounded-full mt-6 px-5 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm transition-all duration-300 placeholder:text-gray-400"
                type="text"
                data-testid="searchInput"
                placeholder="Search a Restaurant"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="mt-3 absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                onClick={() => {
                  const filteredRestaurants = restaurants.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredList(filteredRestaurants);
                }}
              >
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"/restaurants/" + Restaurant.info.id}
          >
            {Restaurant.info.isOpen ? (
              <RestaurantWithMultiOutlet resData={Restaurant} />
            ) : (
              <RestaurantCard resData={Restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
