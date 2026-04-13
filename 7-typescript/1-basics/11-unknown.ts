/*
 ! Unknown
 * Bir değişkenin tipini gerçekten bilmediğimiz durumlarda kullanırız
 * Ama unknown tipine sahip bir dğeişkenin tip kontrolünü yapmadan kullanamayız
 * Değer araması konusunda "any" de olduğu gibi her türlü değer atayabiliriz
 * Any'den farklı noktası değeri kullanırken kontrol etmeden kullanamıyor oluşumuz
*/

// any
let value1: any;

value1 = 123;
value1 = true;
value1 = "asınd";

// console.log(value1.toUpperCase());

// unknown
let value2: unknown;

value2 = 123978;
value2 = true;
value2 = "asmkanfak";

// console.log(value2.toUpperCase());

/*
 * Nerelerde Kullanılır?
 * 1) API'dan gelen veri tipi bell değil
 * 2) Kullanıcı inputu belirsiz
 * 3) catch kod bloğu hatayı yakaladı ama hatanın ne olduğu belirsiz

*/

function parseData(data: unknown) {
  if (typeof data === "string") {
    console.log("Metnin uzunluğu: " + data.length);
  } else {
    console.log("Girdi metin değil", data);
  }
}

parseData("selamlar");
parseData(true);
