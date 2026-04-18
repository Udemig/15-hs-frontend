"use strict";
/*
 ! OOP (Object Orianted Programming)
 * Nesneye Yönelimli Programlama, yazılım geliştirme sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım gerçek hayattaki kavramları koda uyarlar.
 * Kod tekrarını azaltır
 * Daha düzenli, modüler bir yapı kurmak için tercih edilir.
 * Java, C#, C++, Phyton, Ruby, Swift, Kotlin, PHP, Typescript, Javascript, Dart
  
 * OOP'nin temel kavramları
 * Class (Sınıf)
 * Object (Nesne)
 * Inheritance (Kalıtım)
 * Interface (Arayüz)
 * Polymorphisim (Çok Biçimcilik)
 * Encapsulation (Kapsülleme)
 * Abstraction (Soyutlama)
*/
/*
 ! Class (Sınıf)
 * Sınıflar nesnelerin şablonudur.
 * Bir sınıf, belirli türdeki nesneler için özellik ve fonkssiyon tanımlar.
 * Örneği "Araba" sınıfı bir arabanın sahip olucağı özellikleri (renki,mark,model) ve davranışlarını (hızlanma,frenleme,vites değiştirme) tanımlar
*/
class AkilliTelefon {
    // properties (özellikler)
    marka = "Apple";
    model = "Iphone 17";
    ekranTuru = "OLED";
    batarya = 99;
    // methods
    ekranAc() {
        console.log("Ekran açıldı");
    }
    aramaYap(numara) {
        console.log(numara + " aranıyor...");
    }
}
/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına bir anlam ifade etmez
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımladıktan sonra çalıştırırz ve görevini yapar.
 * Class'larda da durum aynıdır class'ı new anahtar kelimesi ile çağırırz ve bize yeni bir nesne oluşturur
 * Class'ın oluşturduğu bu nesneye "instance" (örnek)
*/
const telefon1 = new AkilliTelefon();
const telefon2 = new AkilliTelefon();
const telefon3 = new AkilliTelefon();
telefon2.marka = "Samsung";
telefon2.model = "S25";
telefon2.batarya = 90;
telefon2.ekranTuru = "LED";
console.log(telefon1);
console.log(telefon2);
telefon1.ekranAc();
telefon1.aramaYap("905678893423");
