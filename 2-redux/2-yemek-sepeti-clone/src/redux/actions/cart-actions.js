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

// sepete ürünü ekleyip durumu reducer'a bildiricek
export const addToCart = (product) => (dispatch) => {
  // 1) sepete kaydedilecek veriyi hazırla
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  // 2) api'a sepete eklemek için istek at
  api
    .post("/cart", newItem)
    // 3) istek başarılı olursa reducer'a haber ver
    .then((res) => dispatch({ type: AT.ADD_TO_CART, payload: res.data }))
    .catch(() => alert("Bir sorun oluştu"));
};

// sepetteki ürünün miktarını günceller
export const updateAmount = (productId, newAmount) => (dispatch) => {
  // api'a istek atıp amoınt alanını güncelle
  api
    .patch(`/cart/${productId}`, { amount: newAmount })
    // istek başarılı olursa reducer'a haber gönder
    .then((res) => dispatch({ type: AT.UPDATE_AMOUNT, payload: res.data }))
    .catch(() => alert("İşlem başarısız"));
};

// sepetteki ürünü kaldır
export const deleteFromBasket = (productId) => (dispatch) => {
  // api'a delete isteği atalım
  api
    .delete(`/cart/${productId}`)
    // istek başarılı olursa reducer'a haber ver
    .then(() => dispatch({ type: AT.DELETE_FROM_CART, payload: productId }))
    .catch(() => alert("İşlem başarısız oldu"));
};
