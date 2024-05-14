import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

//lOCAl  State variable
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  let listOfRestaurantsJS = [
    {
      info: {
        id: "413891",
        name: "Louis Burger",
        cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",

        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.4,

        totalRatingsString: "1K+",
        deliveryTime: 52,
      },
    },
    {
      info: {
        id: "413892",
        name: "Domino ",
        cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",

        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 3.5,

        totalRatingsString: "1K+",
        deliveryTime: 52,
      },
    },
    {
      info: {
        id: "413893",
        name: "TARas ",
        cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",

        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.1,

        totalRatingsString: "1K+",
        deliveryTime: 52,
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
