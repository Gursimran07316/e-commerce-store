import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_GET_MY_REQUEST,
  ORDER_GET_MY_SUCCESS,
  ORDER_GET_MY_FAIL,
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  ORDER_GET_FAIL,
} from "../constants/orderContants";
import axios from "axios";
export const placeOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.post("/api/orders", order, config);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getOrderById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const myOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_GET_MY_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders`, config);
    dispatch({ type: ORDER_GET_MY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_GET_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const payOrder = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    );

    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_GET_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/all`, config);
    dispatch({ type: ORDER_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
