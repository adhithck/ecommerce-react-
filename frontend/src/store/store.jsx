import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import productReducer from "./slice/productSlice";
import authReducer from "./slice/authSlice";

import { attachAuthInterceptor } from "../api/api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
  },
});

// ✅ attach interceptor AFTER store exists
attachAuthInterceptor(() => store.getState().auth.token);
