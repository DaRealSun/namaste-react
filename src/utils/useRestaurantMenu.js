import {MENU_API} from "./constants";
import {useEffect, useState} from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setRestInfo] = useState(null);
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestInfo(json.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return resInfo;

};
export default useRestaurantMenu;