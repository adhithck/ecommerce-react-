import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

// GET /api/cart
export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const res = await API.get("/cart");
  return res.data.items; // backend returns { userId, items }
});

// POST /api/cart/add
export const addToCart = createAsyncThunk(
  "cart/add",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await API.post("/cart/add", {
        productId,
        quantity: 1,
      });
      return res.data.cart.items;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

// DELETE /api/cart/remove
export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await API.delete("/cart/remove", {
        data: { productId },
      });
      return res.data.cart.items;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
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
