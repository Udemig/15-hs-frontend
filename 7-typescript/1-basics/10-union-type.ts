/*
 ! Union Type (Birleşmiş Tipler)
 * Bir değişkenin alabileceği birden falza farklı türde veri varsa kullanılabilir
*/

// * Örnek-1
// * Bir şehir değişkeni var ama şehir ismi(string) mi yoksa şehir plakası(number) mı belli değil. Bu tarz durumlarda hem strinh hem number değeri alabileceğini söylemeliyiz

let city: string | number;

city = "İzmir";
city = 35;

// * Örnek-2
// * Kullanıcının telefon bilgilerini bir değişken atıyacaz ama telefon iphone mu yoksa android mi bilmiyoruz
type IOS = {
  iosVersion: number;
  airdropStatus: boolean;
  model: string;
};

type Android = {
  androidVersion: string;
  googlePlayVersion: number;
  model: string;
};

let phone: IOS | Android;

phone = {
  iosVersion: 26.0,
  airdropStatus: true,
  model: "17 Pro",
};

// Union Type'ı nesneler ile kullandığımızda
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// bir değişkenin tipini union type ile tanımlayalım
let example: AType | BType;

// değer atarken hata vermemesi için ya a tipinin bütün özelliklerini tanımlamalıyız
example = { key1: "x", key2: "y" };

// değer atarken hata vermemesi için ya b tipinin bütün özelliklerini tanımlamalıyız
example = { key3: 546, key4: 45645 };

// yada her iki tipin bütün özelliklerini tanımlarız
example = { key1: "x", key2: "y", key3: 1, key4: 2 };
