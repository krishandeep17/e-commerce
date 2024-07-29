import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // payload = newItem
      state.cartItems.push(action.payload);

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItemFromCart: (state, action) => {
      // payload = productId
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state));
    },

    increaseItemQuantity: (state, action) => {
      // payload = productId
      const item = state.cartItems.find((item) => item._id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    decreaseItemQuantity: (state, action) => {
      // payload = productId
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
      // payload = shippingAddress
      state.shippingAddress = action.payload;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    updatePaymentMethod: (state, action) => {
      // payload = paymentMethod
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

export const getCartItems = (state) => state.cart.cartItems;

export const getCartItemsTotalPrice = (state) =>
  state.cart.cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);

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
