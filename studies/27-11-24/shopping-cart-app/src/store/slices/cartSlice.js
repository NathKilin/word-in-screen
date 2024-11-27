import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [
            { id: 1234, name: "Coca-Cola", price: 8.90, quantity: 3, totalPrice: 27.90 },
            { id: 5678, name: "Banana", price: 1.20, quantity: 3, totalPrice: 3.60 }
        ],
        totalQuantity: 6, 
        totalPrice: 31.50, 
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalQuantity++;
            state.totalPrice += action.payload.price;
        },
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);

            if (itemIndex !== -1) {
                // 2. Atualiza totalQuantity e totalPrice
                const item = state.items[itemIndex];
                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.totalPrice;

                // 3. Remove o item
                state.items.splice(itemIndex, 1);
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
