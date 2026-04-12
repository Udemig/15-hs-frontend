/*
 ! String Literal Type
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabileceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip değil değer kısıtlaması yaparız

 * Örn: Bir kullanıcı nesnesinin tipini tanımlamak istiyoruz kullanıcnın rolüne string yazmak yerine string olarak alabileceği 3-4 farklı değeri ifade edersek daha katı bir kısıtlama yapmış oluruz
*/

// Örnek-1
let user: {
  id: number;
  isim: string;
  tip: "admin" | "kullanıcı" | "ziyaretçi";
  cinsiyet: "erkek" | "kadın";
};

user = {
  id: 321123,
  isim: "Ahmet",
  tip: "admin",
  cinsiyet: "erkek",
};

// Örnek-2
let araba: {
  marka: string;
  model: string;
  yil: number;
  renk: string;
  vites: "otomatik" | "manuel";
  km: number;
  yakit: "benzin" | "dizel" | "elektrik" | "benzin+lpg";
  agirHasar: boolean;
  yayinTarihi: Date;
  owner: any;
};

araba = {
  marka: "bmw",
  model: "320",
  yil: 2014,
  renk: "beyaz",
  vites: "otomatik",
  km: 1890000,
  yakit: "benzin",
  agirHasar: false,
  yayinTarihi: new Date("2026-01-01"),
  owner: null,
};
