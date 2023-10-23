import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    StoreCartProducts: (state, action) => {
      const Cart = action.payload;
      state.CartList = [...state.CartList, Cart];
    },
    DeletProduct: (state, action) => {
      state.CartList = state.CartList.filter(
        (Product) => Product.id !== action.payload.id
      );
    },
  },
});

export default cartSlice.reducer;

export const { StoreCartProducts, DeletProduct } = cartSlice.actions;
