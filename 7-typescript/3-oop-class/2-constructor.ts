/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz
 * Constructor new anahtar kalimesi ile class'ı çağırdığımıda çalışan ilk koddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz
*/

class Insan {
  // özellikler
  isim: string;
  soyad: string;
  yas: number;

  // constructor
  constructor(yeniİsim: string, yeniSoyad: string, yeniYas: number) {
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

/*
 ! Challange
 * Bir teknolojik / ev aleti için class oluşturun
 * Bu class'tan oluşturduğunuz nesneler değerlerini constructor'dan alsın
 * Bu class en az 4 özellik ve 1 methoda sahip olsun
 * Class'tan bir örnek oluşturun
*/

class Dishwasher {
  //özellikleri
  isim: string;
  yil: number;
  renk: string;
  marka: string;

  // constructor
  constructor(yeniIsim: string, yeniYil: number, yeniRenk: string, yeniMarka: string) {
    this.isim = yeniIsim;
    this.yil = yeniYil;
    this.renk = yeniRenk;
    this.marka = yeniMarka;
  }

  //method
  calis() {
    console.log(`Merhaba ben ${this.isim} ve ${this.yil} tarihinde buradayım, ${this.renk} ${this.marka}`);
  }
}

const makine1 = new Dishwasher("Siemens", 2026, "siyah-gri", "IQ500");
makine1.calis();

console.log(makine1);
