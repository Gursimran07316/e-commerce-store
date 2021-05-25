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
  USER_DETAILS_UPDATE_RESET,
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
  USER_EDIT_ADMIN_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case USER_DETAILS_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return { loading: true, ...state };
    case USER_DETAILS_UPDATE_SUCCESS:
      return { loading: false, updatedUserInfo: action.payload, success: true };
    case USER_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, ...state };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDetailsAdminReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_ADMIN_REQUEST:
      return { loading: true, ...state };
    case USER_DETAILS_ADMIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_DETAILS_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userEditAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_ADMIN_REQUEST:
      return { loading: true, ...state };
    case USER_EDIT_ADMIN_SUCCESS:
      return { loading: false, success: true };
    case USER_EDIT_ADMIN_RESET:
      return {};
    case USER_EDIT_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDeleteReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case USER_DELETE_ADMIN_REQUEST:
      return { loading: true, ...state };
    case USER_DELETE_ADMIN_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_ADMIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
