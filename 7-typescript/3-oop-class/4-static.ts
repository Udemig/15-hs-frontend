/*
 ! Static
 * Static anahtar kelimesi, özelliği veya methodu sınıfın örneğini oluşturmadan kullanabilmemizi sağlar
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz
*/

//! Static Method
class Matematik {
  x: number = 10;

  // static olmayan  methodlar sınıf içindeki özelliklere erişebilir
  topla(y: number) {
    console.log(y + this.x);
  }

  // static methodlar sınıf içindeki özelliklere erişemez
  static carp(a: number, b: number) {
    console.log(a * b);
  }
}

// static olmayan topla fonksiyonuna erişmek için öncelikle sınıftan örnek alınmalı
const math = new Matematik();
math.topla(20);

// statik olan carp fonksiyonuna sınıftan örnek almdan direkt sınıf üzerinden erişebiliyoruz
Matematik.carp(3, 5);

//? Örnekler

// static olmayan bir method örneği
new Date("2026-01-01").toLocaleDateString();

// statik olan
Date.now();

// statik olmayan
new Date().getFullYear();

// statik olan
Math.round(56.8);

//! Static Property
// Doğrudan class üziernden erişilebilen özelliklerdir
class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(isim: string) {
    // static olmayan bir özelliğe erişme
    this.isim = isim;

    // static bir özelliğe erişme
    Ogrenci.ogrenciSayisi++;
  }
}

console.log(new Ogrenci("Meryem"));
console.log(new Ogrenci("Mert"));
console.log(new Ogrenci("Ömer"));
console.log(new Ogrenci("Vedat").isim);

console.log(Ogrenci.ogrenciSayisi);
