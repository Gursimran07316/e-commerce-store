import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

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
export const removeItem = (id) => async (dispatch, getState) => {
  dispatch({ payload: id, type: CART_REMOVE_ITEM });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
