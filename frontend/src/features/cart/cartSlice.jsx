import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const res = await API.get("/cart");
  return res.data.items;
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async (productId) => {
    const res = await API.post("/cart/add", { productId });
    return res.data.cart.items;
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (productId) => {
    const res = await API.delete("/cart/remove", {
      data: { productId },
    });
    return res.data.cart.items;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default cartSlice.reducer;
