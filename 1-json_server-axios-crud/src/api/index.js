import axios from "axios";

// .create() ile yeni bir axios örneği oluşturuyoruz
// bu örneği oluştururken bütün ayarları istediğimiz gibi değiştirebiliriz
const api = axios.create({
  baseURL: "http://localhost:5000", // temel api adresi
  // params: { lang: "tr" }, // varsayılan parametrele
  // headers: { Authorization: "api-anahtarı" }, // varsayılan headerlar
  timeout: 3000, // zaman aşımı
});

// istekleri kontrol etme amacıyla api'a giden her isteği console'a logla
api.interceptors.request.use((config) => {
  console.log("API'a istek atıldı: ", config.method, config.url);
  return config;
});

// api'dan gelen her cevapta eğer hata gelirse ekrana bildirim gönder
api.interceptors.response.use(
  (response) => response,
  (error) => {
    alert("Hata oluştu");
    console.log("Hata:", error);
    return Promise.reject(error);
  },
);

export default api;
