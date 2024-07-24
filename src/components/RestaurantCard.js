const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] bg-blue-50 rounded-lg hover:bg-blue-100">
            {/*<img*/}
            {/*  className="res-logo"*/}
            {/*  alt="res-logo"*/}
            {/*  src={CDN_URL + cloudinaryImageId}*/}
            {/*/>*/}
            <h3 className="font-bold py-4 text-xl text-fuchsia-900">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

//Higher Order Component
//input - restaurant card ==> Restaurant card promoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label> Promoted </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;
