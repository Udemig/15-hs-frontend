# Kütüphaneler

- react
- axios
- react-router-dom
- react-icons
- react-player
- millify
- tailwindcss

# Kaynaklar

- API: https://rapidapi.com/ytjar/api/yt-api

# Enviroment Variables

- Ortam değişkenleri, projenizde kullanmanız gereken ama herkesle paylaşmak istemeyeceğiniz ve githuba gönderilisini engelliyeceğimiz değişkenelere denir.
- Projeyi yayınladıktan sonra bu değerleri koda müdahele etmeden değiştirebiliyoruz bu yüzden sadece hassas verileri değilde projeyi yayınladıktan sonra değiştirebileceğimiz bazı verileride bu yöntemle tanımlarız

## Nasıl Tanımlanır

- Proje içerisinde `.env` isimli bir dosya oluştururuz.
- `VITE_DEĞİŞKEN_İSMİ=değişkenin_değeri`
- env dosyasında sadece string değerler tanımlanabilir
- Proje içerisinde env de tutulan bir değişkene erişmek için `import.meta.env.DEĞİŞKEN_İSMİ`
