/*
 ! Tuple Type
 * Tuple, dizinin bir alt tipidir.
 * Uzunluğu ve elemanlarının sırası sabit olan dizilerin tipinin tanımlanması için kullanılır
*/

// Örnek-1: Elemanların sırası sabit bir dizinin tipini tanımlayalım
// yanlış yol (union type)
const ders1: (string | number)[] = ["5", "10", "Matematik"];

// doğru yol (tuple type)
const ders2: [string, number] = ["Matematik", 5];

// Örnek-2: Bir css gradient verisi api'dan dizi içerisinde geliyor
// [doğrultu,renk1,renk2]
let gradient: [number, string, string] = [180, "#000000", "#ffffff"];

// Örnek-3: Bir api'dan dizi içerisinde rgb/rgba verisi geliyor
// [red,green,blue,alpha(opsiyonel)]
// Bu seneryoda dizideki son değer opsiyonel yani isteğe bağlıdır
// Kural: Opsiyonel bir elemanın ardından zorunlu bir eleman gelemez
let color: [number, number, number, number?];

color = [123, 78, 92];

color = [123, 78, 92, 0.5];

// Örnek-4: Projede kullanım örneği
// API'dan kordinal dizisi geliyor olsun ve bunun tipini tanımlayalım

const x: [number, number][] = [
  [123.453, 72.483],
  [124.875, 75.3473],
  [130.123, 79.997],
];

const y: number[][] = [[1, 1, 1, 1, 1, 1], [2], [3, 3, 3, 3, 3, 33, 3, 3, 3]];
