import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state));
    },

    increaseItemQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    decreaseItemQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCartItems: (state) => {
      state.cartItems = [];

      localStorage.setItem("cart", JSON.stringify(state));
    },

    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    resetCart: (state) => {
      state.cartItems = [];
      state.shippingAddress = {};
      state.paymentMethod = "PayPal";

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCartItems,
  updateShippingAddress,
  updatePaymentMethod,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
