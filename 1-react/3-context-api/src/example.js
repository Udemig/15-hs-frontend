// 1. Normal Parantez () ---> değer döndürmek için kullanılır
// Tek satır fonksiyon yazıldığında () kullanmdan da fonksiyonu tanımlayabili
// Bu kullanımda yazılan değer otomatik return edili
const ikiKat = (sayi) => sayi * 2;

// 2. Süslü Parantez {} ----> birden fazla işlem yapmak için kullanılır
// bu kullanımda oto return yoktur returnu kendimiz belirleriz
const ucKat = (sayi) => {
  const x = sayi / 3;
  const y = x * 10;
  return y;
};

// Tek satır fonksiyonm nesne döndürülecekse () kullanılmalı
const dortKat = (sayi) => ({ carpim: sayi * 2 });
