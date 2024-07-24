import useOnlineStatus from "../utils/useOnlineStatus";
import {LOGO_URL} from "../utils/constants";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //Subcribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    return (<div className="flex justify-between bg-pink-100 shadow-lg  sm:bg-amber-100 ">
            <div className="logo-container">
                <img className="logo w-56" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "(✌ﾟ∀ﾟ)☞" : "(ᇴ‿ฺᇴ)"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">🛒 ({cartItems.length}) items</Link>
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
