import AT from "./action-types";
import api from "../../api";

// redux thunk aksiyonu
// sepetteki ürünleri için api'a istek atıp durumu reducer'a bildiricek
export const getCart = () => (dispatch) => {
  dispatch({ type: AT.CART_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: AT.CART_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: AT.CART_ERROR, payload: err.message }));
};
