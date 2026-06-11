import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plants: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPlant: (state, action) => {
            const plant = action.payload;
            const existing = state.plants.find((p) => p.id === plant.id);

            if (existing) {
                existing.qty += 1;
            } else {
                state.plants.push({ ...plant, qty: 1 });
            }

            state.totalPrice += plant.price;
        },

        removePlant: (state, action) => {
            const id = action.payload;
            const item = state.plants.find((p) => p.id === id);

            if (!item) return;

            state.totalPrice -= item.price * item.qty;
            state.plants = state.plants.filter((p) => p.id !== id);
        },

        decreaseQty: (state, action) => {
            const id = action.payload;
            const item = state.plants.find((p) => p.id === id);

            if (item && item.qty > 1) {
                item.qty -= 1;
                state.totalPrice -= item.price;
            }
        },
    },
});

export const { addPlant, removePlant, decreaseQty } =
    cartSlice.actions;

export default cartSlice.reducer;