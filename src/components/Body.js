import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // Optional Chaining
        setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Look like you're offline!! Please check your in ternet connection</h1>

    const {loggedInUser, setUserName} = useContext(UserContext);
    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="flex items-center">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="search-box border border-solid border-amber-950"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />

                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                            onClick={() => {
                                // Filter the restraunt cards and update the UI
                                // searchText
                                const filteredRestaurant = listOfRestaurants.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurant(filteredRestaurant);
                            }}
                    >
                        Search
                    </button>
                </div>


                <div className="m-4 p-4 ">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setListOfRestraunt(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>

                </div>

                <div>
                    <label>UserName: </label>
                    <input className="border border-black p-2"
                           value={loggedInUser}
                           onChange={(e) => setUserName(e.target.value)}/>
                </div>


            </div>
            <div className="flex-wrap flex">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {restaurant.info.data ? (
                            <RestaurantCardPromoted resData={restaurant}/>
                        ) : (<RestaurantCard resData={restaurant}/>)}

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
