"use strict";
/*
 ! Function Type
 * Typescrip'de fonksiyon tipini tanımlamaktan kastımız fonksiyonun aldığı parametrenin ve döndürdüğü değerin tipini tanımlamaktır
*/
// normal function
function topla(a, b) {
    return a + b;
}
const x = topla(90, "merhaba");
// arrow function
const topla2 = (a, b) => {
    return a + b;
};
// Örnek - 1
// sayının pozitif olup olmadığını kontrol eden fonksiyon
// 10 => true  |   -3 => false
const isPositive = (sayi) => {
    return sayi > 0;
};
console.log(isPositive(10));
console.log(isPositive(-4));
// Örnek - 2
const ortalama = (dizi) => {
    const toplam = dizi.reduce((toplam, sayi) => toplam + sayi, 0);
    return toplam / dizi.length;
};
console.log(ortalama([32, 435, 3, 23, 4, 6545, 645, 645, 3, 4534, 7876]));
