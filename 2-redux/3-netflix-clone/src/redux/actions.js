import AT from "./action-types";
import api from "../utils/api";

// redux thunk aksiyonu
// izleme listesindeki filmleri api'dan alıp reducer'a haber ver
export const getWatchList = () => (dispatch) => {
  dispatch({ type: AT.LIST_LOADING });

  api
    .get("/account/19719088/watchlist/movies")
    .then((res) => dispatch({ type: AT.LIST_SUCCESS, payload: res.data.results }))
    .catch((err) => dispatch({ type: AT.LIST_ERROR, payload: err.message }));
};

// izleme listesine ekle/kaldır isteği atıp reducer'a haber ver
export const toggleWatchList = (movie, isAdd) => (dispatch) => {
  // api'a gönderilecek veriyi hazırla
  const body = {
    media_id: movie.id,
    media_type: "movie",
    watchlist: isAdd,
  };

  // api isteğini at
  api.post("/account/19719088/watchlist", body).then(() => {
    // ekleme/çıkarma durumuna göre reducer'a haber ver
    isAdd
      ? dispatch({ type: AT.ADD_TO_LIST, payload: movie })
      : dispatch({ type: AT.REMOVE_FROM_LIST, payload: movie.id });
  });
};
