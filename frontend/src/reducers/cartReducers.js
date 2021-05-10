import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const { item } = action;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        const newcartItems = state.cartItems.map((i) =>
          i.product === item.product ? item : i
        );
        return { ...state, cartItems: newcartItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product != action.payload),
      };
    }
    default:
      return state;
  }
};
