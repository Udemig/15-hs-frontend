"use strict";
/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz
 * Constructor new anahtar kalimesi ile class'ı çağırdığımıda çalışan ilk koddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz
*/
class Insan {
    // özellikleri
    isim;
    soyad;
    yas;
    // constructor
    constructor(yeniİsim, yeniSoyad, yeniYas) {
        this.isim = yeniİsim;
        this.soyad = yeniSoyad;
        this.yas = yeniYas;
    }
    // method
    konus() {
        console.log(`Merhaba ben ${this.isim} ${this.soyad} ve ${this.yas} yaşındayım`);
    }
}
const insan1 = new Insan("Ali", "Kaya", 29);
const insan2 = new Insan("Fatma", "Gündüz", 53);
console.log(insan1);
console.log(insan2);
insan1.konus();
