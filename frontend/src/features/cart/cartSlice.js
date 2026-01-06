import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

/* ===== FETCH CART ===== */
export const fetchCart = createAsyncThunk(
  "cart/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/cart");
      return res.data.items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

/* ===== ADD TO CART ===== */
export const addToCart = createAsyncThunk(
  "cart/add",
  async (productId, thunkAPI) => {
    await API.post("/cart/add", { productId });
    thunkAPI.dispatch(fetchCart());
  }
);

/* ===== REMOVE FROM CART ===== */
export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (productId, thunkAPI) => {
    await API.delete("/cart/remove", { data: { productId } });
    thunkAPI.dispatch(fetchCart());
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default cartSlice.reducer;
