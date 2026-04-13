"use strict";
/*
 ! Default Params (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerin undefined olmasını istemeyebiliriz
 * Undefined olması yerine varsayılan bir değere sahip olmasını istersek bu yöntemi kullanırız
*/
// Örnek-1
function selamVer(isim = "Dünya") {
    console.log(`Merhaba ${isim}`);
}
selamVer("Furkan"); // Merhaba Furkan
selamVer(); // Merhaba Dünya
// Örnek-2
// Ürünün kdv eklenmiş fiyatını hesaplayan bir fonksiyon yazalım
// Fonksiyon 2 parametre alsın: ürün fiyat, kdv oranı(opsiyonel)
// KDV oranı paramtresi gönderilmezse varsayılan %18'den hesaplansın
function fiyatHesapla(fiyat, kdv = 0.18) {
    return fiyat + fiyat * kdv;
}
console.log(fiyatHesapla(200, 0.35)); // 270
console.log(fiyatHesapla(200)); // 236
