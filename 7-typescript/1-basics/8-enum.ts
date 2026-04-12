/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutumak için kullanılır
 */

// Örnek - 1
// Trafik ışığının aşamalarını verisini tut

// 1) klasik js yöntemi
const color = {
  kirmizi: 0,
  sari: 1,
  yesil: 2,
};

// bu renklerden birini değişkene atayalım
const renk1: number = color.kirmizi;

// 2) typescript enum yöntemi
enum Light {
  kirmizi,
  sari,
  yesil,
}

// bu renklerden birini değişkene atayalım
// enumları tip ataması olarak kullanabiliyoruz bu sayede değişken sadece enum içerisindeki değerleri alabilir
const renk2: Light = Light.yesil;

// Örnek - 2
enum Gun {
  pazartesi = 1,
  sali,
  carsamba,
  persembe,
  cuma,
  cumartesi,
  pazar,
}

let gun1 = Gun.cumartesi;
let gun2 = Gun[3];

console.log(gun1); // 6
console.log(gun2); // carsamba

// Örnek - 3
// Bir kargo takip sitesi yazıyoruz ve kullanıclara sıklıkla kargo durumunu bildirmek gerekiyor. Bu durumda kargo aşamalarını js'de bir nesneye atar ve orda çağırırdık ts'de ise daha kullanışlı olması için enumı tercih ederiz
enum Status {
  pending = "Beklemede",
  on_the_way = "Yola çıktı",
  delivered = "Teslim edildi",
  canceled = "İptal edildi",
}

// değişkenin tipini tanımlarken enumı kullanabiliriz
let kullanıcı_kargo_durumu: Status = Status.on_the_way;

console.log(kullanıcı_kargo_durumu); // on_the_way
