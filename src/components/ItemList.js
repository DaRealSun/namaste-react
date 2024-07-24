import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item))
    }
    return <div>

        {items.map(item =>
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left justify-between">
                <div>
                    <span className="py-2">{item.card.info.name}</span>
                    <span> - ${parseInt(item.card.info.price / 1500)}</span>
                </div>

                <p className="text-xs">{item.card.info.description}</p>
                <button className="p-2 bg-white shadow-lg  mx-5 w-3/12 "
                        onClick={() => handleAddItem(item)}>
                    Add +
                </button>
            </div>
        )

        }

    </div>
}

export default ItemList;