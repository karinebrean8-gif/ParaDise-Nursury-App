import React from "react";
import { useDispatch } from "react-redux";
import {
    addPlant,
    removePlant,
    decreaseQty,
} from "./CartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="border p-4 rounded mb-3 flex justify-between bg-white">
            <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>${item.price}</p>
                <p>Qty: {item.qty}</p>
            </div>

            <div className="flex gap-2">
                <button onClick={() => dispatch(addPlant(item))}>+</button>
                <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                <button onClick={() => dispatch(removePlant(item.id))}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;