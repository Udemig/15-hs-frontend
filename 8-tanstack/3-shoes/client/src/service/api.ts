import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// axios interceptor (middleware)
// api'a atılan her istekte veya api'dan gelen her cevapta fonksiyon çalıştırmaya yarar
api.interceptors.response.use(
  // api'dan olumlu cevap gelince çalışır
  (res) => res,
  // api'dan olumsuz cevap gelince çalışır
  async (err) => {
    // hata aldığımız api isteğini değişkene aktar
    const originalRequest = err.config;

    // hata access tokenın süresi dolmasından kaynaklı bir hata ise
    if (err.response.status === 401 && err.response?.data?.message === "Access token expired") {
      try {
        // access tokenı yenile
        await authService.refresh();

        // hata aldığımız api isteğini tekrar at
        return api.request(originalRequest);
      } catch (error) {
        //refresh roken geçersiz ise: çıkış yap
        await authService.logout();

        // login sayfasına yönlendir
        window.location.href = "/login";
      }
    }
  },
);

export default api;
