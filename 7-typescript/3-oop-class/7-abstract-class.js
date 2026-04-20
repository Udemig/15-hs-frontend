"use strict";
/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özellik ve methodlarını tanımlarız.
 * Soyut sınıfların doğrudan örnekleri oluşturulamaz
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi görür
*/
class Foto {
    // normal sınıflar gibi constructor tanımı yapabiliriz
    constructor(kameraModu, filtre) { }
    // normal sınıflarda olduğu gibi bir method tanımlayalım
    fotoCek() {
        console.log("Fotoğraf çekiliyor...");
    }
}
// soyut sınıfı miras alan bir alt sınıf tanımlayalım
class Instagram extends Foto {
    fotoPaylas(kim) {
        console.log(`Foto instada ${kim} ile paylaşıldı`);
    }
}
// soyut sınıfı miras alan farklı bir alan sınıf tanımlayalım
class Twitter extends Foto {
    fotoPaylas(kim) {
        console.log(`Foto twitter'da ${kim} ile paylaşıldı`);
    }
}
new Instagram("Geniş Açı", "Siyah Beyaz").fotoPaylas("Ahmet");
new Twitter("Portre", "Canlı").fotoPaylas("Mehmet");
