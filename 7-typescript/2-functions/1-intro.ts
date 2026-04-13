/*
 ! Function Type
 * Typescrip'de fonksiyon tipini tanımlamaktan kastımız fonksiyonun aldığı parametrenin ve döndürdüğü değerin tipini tanımlamaktır 
*/

// normal function
function topla(a: number, b: string): string {
  return a + b;
}

const x = topla(90, "merhaba");

// arrow function
const topla2 = (a: number, b: string): string => {
  return a + b;
};

// Örnek - 1
// sayının pozitif olup olmadığını kontrol eden fonksiyon
// 10 => true  |   -3 => false
const isPositive = (sayi: number): boolean => {
  return sayi > 0;
};

console.log(isPositive(10));
console.log(isPositive(-4));

// Örnek - 2
const ortalama = (dizi: number[]): number => {
  const toplam = dizi.reduce((toplam, sayi) => toplam + sayi, 0);

  return toplam / dizi.length;
};

console.log(ortalama([32, 435, 3, 23, 4, 6545, 645, 645, 3, 4534, 7876])); // 1885
