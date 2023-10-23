import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productId: 1,
};
const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    // StorProducts: (state, action) => {
    //   const productCart = action.payload;
    //   console.log(productCart);
    //   state.productList = [...state.productList, productCart];
    // },
    StorProductsId: (state, action) => {
      state.productId = action.payload;
      console.log(action.payload);
    },
  },
});

export default productSlice.reducer;

export const { StorProducts, StorProductsId } = productSlice.actions;
