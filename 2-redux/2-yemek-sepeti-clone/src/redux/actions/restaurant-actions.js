import AT from "./action-types";
import api from "../../api";

// redux thunk aksiyonu
export const getRestaurants = () => (dispatch) => {
  // reducer'a yükleniyor bilgisini gönderelim
  dispatch({ type: AT.REST_LOADING });

  // api isteği yapalım
  api
    .get("/restaurants")
    // istek başarılı olursa reducer'a gelen veriyi gönderelim
    .then((res) => dispatch({ type: AT.REST_SUCCESS, payload: res.data }))
    // istek başarısız olursa reducer'a hata bilgisini gönderelim
    .catch((err) => dispatch({ type: AT.REST_ERROR, payload: err.message }));
};
