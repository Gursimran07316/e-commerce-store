import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAILS_ADMIN_REQUEST,
  USER_DETAILS_ADMIN_SUCCESS,
  USER_DETAILS_ADMIN_FAIL,
  USER_EDIT_ADMIN_REQUEST,
  USER_EDIT_ADMIN_SUCCESS,
  USER_EDIT_ADMIN_FAIL,
  USER_DELETE_ADMIN_REQUEST,
  USER_DELETE_ADMIN_SUCCESS,
  USER_DELETE_ADMIN_FAIL,
  USER_LIST_RESET,
  USER_DETAILS_RESET,
} from "../constants/userConstants";
import { ORDER_GET_MY_RESET } from "../constants/orderContants";
import axios from "axios";

export const loginUser = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/signin",
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(getState().userLogin));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch({ type: USER_LIST_RESET });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_GET_MY_RESET });
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/signin";
};
export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get("/api/users/profile", config);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get("/api/users/admin", config);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUserById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_ADMIN_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);
    dispatch({ type: USER_DETAILS_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateUserDetails = (userInfo) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_UPDATE_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.put("/api/users/profile", userInfo, config);
    dispatch({ type: USER_DETAILS_UPDATE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_DETAILS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateUser = (userInfo) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_EDIT_ADMIN_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/edit`, userInfo, config);
    dispatch({ type: USER_EDIT_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_EDIT_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_ADMIN_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);
    dispatch({ type: USER_DELETE_ADMIN_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_DELETE_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
