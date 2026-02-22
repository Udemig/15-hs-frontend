import AT from "../actions/action-types";

const initialState = {
  isLoading: true,
  error: null,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.CART_LOADING:
      return { ...state, isLoading: true };

    case AT.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case AT.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    default:
      return state;
  }
};

export default cartReducer;
