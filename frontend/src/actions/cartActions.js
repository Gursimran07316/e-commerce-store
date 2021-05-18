import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_SHIPPING_ADDRESS,
  CART_ADD_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const addItem = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  const item = {
    product: data._id,
    image: data.image,
    name: data.name,
    qty,
    countInStock: data.countInStock,
    price: data.price,
  };
  dispatch({ item, type: CART_ADD_ITEM });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeItem = (id) => (dispatch, getState) => {
  dispatch({ payload: id, type: CART_REMOVE_ITEM });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const addShippingAddress = (address) => (dispatch) => {
  dispatch({ payload: address, type: CART_ADD_SHIPPING_ADDRESS });
  localStorage.setItem("shippingAddress", JSON.stringify(address));
};
export const addPaymentMethod = (address) => (dispatch) => {
  dispatch({ payload: address, type: CART_ADD_PAYMENT_METHOD });
  localStorage.setItem("paymentMethod", JSON.stringify(address));
};
