/*
 ! Array Type
 * Typescript'de dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak demek yerine bu değişken string elemanlara sahip bir dizi olucak deriz

 * Yani dizinin içeriği ne olucak? dizinin elemanlarının tipi ne olucak gibi belirtmemiz gerekiyor

 * Tanım:
 * tip[]
 * string[]   number[]     object[]      boolean[]
*/

// Örnek - 1
let numbers: number[] = [1, 2, 3, 4, 5];

// Örnek - 2
let names: string[] = ["Ahmet", "Furkan", "Fatma"];

// Soru: Dizide farklı tipte elemanlar olursa tip nasıl tanımlanmalı?
// Cevap: Birden fazla farklı tipte değere sahip bir dizi tanımlamak istiyorsak Union Type kullanılmalı
const mixed: (string | number | null)[] = [1, 2, "a", null, "c", 5];

const inside: (string | number | null)[][] = [["a"], [9], [null]];

const inside2: (string | number | number[])[] = [1, 2, "a", [0, 1, 2]];
