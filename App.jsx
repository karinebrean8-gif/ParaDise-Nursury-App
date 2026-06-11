import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlant } from "./CartSlice";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

const App = () => {
  const dispatch = useDispatch();
  const { plants, totalPrice } = useSelector(
    (state) => state.cart
  );

  const plantList = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 20 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Paradise Nursery 🌿
      </h1>

      {/* Plant List */}
      <div className="grid md:grid-cols-3 gap-4">
        {plantList.map((plant) => (
          <div
            key={plant.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2>{plant.name}</h2>
            <p>${plant.price}</p>

            <button
              onClick={() => dispatch(addPlant(plant))}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <h2 className="mt-6 text-xl font-bold">Cart</h2>

      {plants.length === 0 ? (
        <p>No plants added</p>
      ) : (
        plants.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      )}

      <h3 className="mt-4 font-bold">
        Total: ${totalPrice}
      </h3>

      <AboutUs />
    </div>
  );
};

export default App;