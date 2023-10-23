import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/featuers/products/productSlices";
import cartReducer from "../redux/featuers/cart/cartSlice"
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer
  },
});

export default store;
