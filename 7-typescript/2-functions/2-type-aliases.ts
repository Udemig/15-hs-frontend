/*
 * Typescipt'de bir fonksiyonuntipini doğrudan fonksiyonu yazarken tanımlamak terine type aliases ile ayrı bir tip oluşturabiliyoruz
 */

// 1.Yöntem: fonksiyonu yazarken tip tanımlama
let func1 = (par1: string, par2: number): string => {
  return par1 + par2;
};

// 2.Yöntem: Type aliases ile fonksiyonun tipini ayrıca tanımlama
type FuncType = (par1: string, par2: number) => string;

let func2: FuncType = (par1, par2) => {
  return par1 + par2;
};

func2("selam", 23);

/*
 ! Challange
 * Yukarıdaki 2.yöntemde olduğu gibi bir fonksiyon tipi tanımlayın

 * * Parametre olarak kişinin bulunuğu şehrin ve havanın derecesini alsın
 * * Eğer hava derecesi 30 dereceden büyükse "Hava Sıcak" return etsin
 * * Eğer hava derecesi 10 dereceden küçükse "Hava Soğuk" return etsin
 * * Eğer hava derecesi 10-30 arasındaysa "Hava Normal" return etsin

 * * Bonus: Return edilen metinlere şehir ismi eklenebilir: "Ankara'da ha soğuk"
 * * Hem fonksiyonun tipini hemde fonksiyonu tanımlayın
 * * Fonksiyonu 1 kez çağırın
 */

// Cevap
type HavaDurumuFonksiyonu = (sehir: string, derece: number) => string;

const havaDurumu: HavaDurumuFonksiyonu = (sehir, derece) => {
  if (derece > 30) {
    return `${sehir}'da hava sıcak`;
  } else if (derece < 10) {
    return `${sehir}'da hava soğuk`;
  } else {
    return `${sehir}'da hava normal`;
  }
};

const sonuc = havaDurumu("Edirne", 5);
