/*
 ! Intersection Types | Kesişim Türler
 * Typescript'de kesişim türler, iki veya daha fazla tipi birleştirirek yeni bir tür oluşturmamıza olanak sağlar.
*/

type AType = { key1: string };
type BType = { key2: number };

// Intersection: Her iki nesne tipinin özelliklerini birleştirelim
type ABType = AType & BType;

let foo: ABType = { key1: "Merhaba", key2: 78 };

// Union Type: Belirtilen türlerden en az birinin bütün özelliklerini tanımlanmalı
type AorBType = AType | BType;

let boo1: AorBType = { key1: "Merhaba" }; // geçerli
let boo2: AorBType = { key2: 765890887 }; // geçerli
let boo3: AorBType = { key1: "A", key2: 4 }; // geçerli

// Örnek
// type Kisi = {
//   id: string;
//   isim: string;
// };

// type İletisim = {
//   eposta: string;
//   telefon: string;
// };

type Calisan = {
  departman: string;
  maas: number;
};

// type Kullanici = {
//   bakiye: number;
//   aktif: boolean;
// };

type Eleman = Kisi & İletisim & Calisan;

const eleman: Eleman = {
  id: "1",
  isim: "Veli",
  eposta: "veli@firma.com",
  telefon: "555-66-77-88",
  departman: "Satış",
  maas: 58946,
};

type Kisi = {
  id: string;
  isim: string;
};

type İletisim = {
  eposta: string;
  telefon: string;
};

type Kullanici = {
  bakiye: number;
  aktif: boolean;
};

type Musteri = Kisi & İletisim & Kullanici;

const musteri: Musteri = {
  id: "2",
  isim: "Işıl",
  eposta: "isil@muster.com",
  telefon: "555-234-12-45",
  bakiye: 14500,
  aktif: true,
};

/*
 ! Challange
 * Intersection type kullanarak birden fazla türü birleştirin
 * Ortaya çıkan yeni türü nesne tipi tanımında kullanın
*/

type Krema = {
  isim: string;
};

type Sos = {
  sosIsim: string;
  meyveliMi: boolean;
  cikolataliMi: boolean;
};

type Kek = {
  kat: number;
};

type Pasta = Krema & Sos & Kek;

const pasta: Pasta = {
  isim: "limonlu ",
  sosIsim: "Limon sosu",
  meyveliMi: true,
  cikolataliMi: false,
  kat: 2,
};
