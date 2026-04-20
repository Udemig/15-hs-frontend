"use strict";
/*
 ! Type Guard
 * Bu teknik sayesinde belirli türdeki değerleri kontrol edip türe özgü işlemler gerçekleştirebiliyoruz
 * Bu tekniği typeOf ve instanceOf javascript methodları ile uygularız
 */
// typeOf: bir değişkenin tipini kontrol etmek için kullanılır
console.log(typeof "hello");
console.log(typeof 32423);
console.log(typeof false);
console.log(typeof { id: 123 });
const tur = { isim: "Doğa Yürüyüşü", zorluk: "zor" };
console.log(typeof tur); // object
//! typeof ile typeguard tekniği
function log(input) {
    if (typeof input === "string") {
        console.log(input.split("a"));
    }
    else {
        console.log(input.toFixed(2));
    }
}
log("selamlar");
log(3425);
// typeof örnek
// girdi olarak hem string "123" hem de number 123 formatında sayı kabul eden bir fonksiyon yazalım
// eğerki girdi sayı ise direkt return etsin
// eğerki girdi string ise sayıya çevirip return etsin
// sayıya çevrilmiyorsa 0 return etsin
const formatNumber = (input) => {
    if (typeof input === "number") {
        // input sayı ise direkt return et
        return input;
    }
    else {
        // input string ise sayıya çevir
        const value = parseInt(input);
        // sayı değilse 0 döndür
        return isNaN(value) ? 0 : value;
    }
};
console.log(formatNumber(435));
console.log(formatNumber("543"));
console.log(formatNumber("selam"));
// instanceOf nedir?
class Kaplumbaga {
}
class Tavsan {
}
const tospik = new Kaplumbaga();
console.log("Tospik nesnesi, Tavşan sınıfından mı meydana geldi?", tospik instanceof Tavsan); // false
console.log("Tospik nesnesi, Kaplumağa sınıfından mı meydana geldi?", tospik instanceof Kaplumbaga); // true
//! instanceOf ile typeguard tekniği
class Kedi {
    isim = "Tekir";
    miyavla() {
        console.log("🐈🐈🐈 miyav miyav");
    }
}
class Kopek {
    isim = "Karabaş";
    havla() {
        console.log("🐶🐶🐶 hav hav");
    }
}
// aşağıdaki fonksiyon parametre olarak aldığı hayvana göre hayvanın sesini çıkaran fonksiyonu çalıştırsın
function sesCikar(hayvan) {
    if (hayvan instanceof Kedi) {
        // hayvan parametresi Kedi sınıfından alınan bir örnek ise miyavla()
        hayvan.miyavla();
    }
    else if (hayvan instanceof Kedi) {
        // hayvan parametresi Kopek sınıfından alınan bir örnek ise havla()
        hayvan.havla();
    }
}
sesCikar(new Kedi());
sesCikar(new Kopek());
// Örnek
class NetworkError {
    name = "Bağlantı Hatası";
    message = "Ağ bağlantısı kesildi";
    connection = false;
}
class ValidationError {
    name = "Doğrulama Hatası";
    message = "Şifre yeterince güçlü değil";
    input = "email";
}
const handleError = (error) => {
    if (error instanceof NetworkError) {
        console.log("🛜 Ağ Hatası: ", error.message, "Bağlantı: ", error.connection);
    }
    else if (error instanceof ValidationError) {
        console.log("⚠️ Doğrulama Hatası", error.message, "Input", error.input);
    }
    else {
        console.log("❌ Genel Hata", error.message);
    }
};
handleError(new NetworkError());
handleError(new ValidationError());
handleError(new Error("Sunucu çöktü"));
