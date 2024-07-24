import {useEffect, useState} from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        //API calls
    }, []);

    return (

        <div className="user-card m-4 p-4 bg-blue-300 rounded-lg font-bold">
            <h1>Count={count}</h1>
            <h2 className="font-bold">Name: {props.name}</h2>
            <h3>Location: RockVille</h3>
            <h4>Contact: @DarealSun</h4>

        </div>);
}
export default User;