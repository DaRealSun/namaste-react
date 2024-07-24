import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
                email: "default",
                avatar_url: "https://www.instagram.com/p/C1PGyWmPh8d/",
            }

        };
    }

    async componentDidMount() {
        //API calls
        const data = await fetch("https://api.github.com/users/minhbac333studyus");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json)
    }

    render() {
        const {name, location, email, avatar_url} = this.state.userInfo;
        return (<div className="user-card">

            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {email}</h4>
            <img src={avatar_url}/>

        </div>);
    }
}

export default UserClass;