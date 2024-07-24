import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("parent constructor")
    }

    render() {
        return (
            <div className="font-serif border-amber-950">
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"Minh Sun (class)"} location={"Rockville"}/>
            </div>
        );
    }
}


export default About;
