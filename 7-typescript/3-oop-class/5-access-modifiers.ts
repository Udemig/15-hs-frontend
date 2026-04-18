/*
 ! Erişim Belirteçleri
 * Class elemanları ile veri tutucağımız zaman, bu verilerin class'ın dışarısından erişilebilir olup olmama durumunu belirlememizi sağlar

 * Erişim belirteçleri:
 - public (varsayılan): Her yerden erişebilir
 - protected: sadece sınofın kendisi ve alt sınıfları özelliğe erişebilir
 - private: sadece sınfın kendiisi özelliğe erişebilir
*/

// Ev Sınıfı
class Ev {
  public adres: string = "İstanbul";
  protected fiyat: number = 5460000;
  private sahip: string = "Ahmet Yılmaz";

  tanim() {
    console.log(`Bilgiler: ${this.adres}, ${this.fiyat}, ${this.sahip}`);
  }
}

// Ev sınıfından miras alan Villa sınıfı
class Villa extends Ev {
  tanim() {
    console.log(`Bilgiler: ${this.adres} ${this.fiyat}`);
  }
}

// Ev sınıfından bir örnek oluştur
const ev = new Ev();
console.log(ev.adres);

/*
 * Belirteç         Tanımlandığı Sınıf                Alt Sınıf              Dışarıdan Erişim
 * public                 evet                           evet                       evet
 * protected              evet                           evet                       hayır
 * private                evet                           hayır                      hayır

*/

// Örnek

class BankaHesabi {
  public hesapNumarası: string;
  protected bakiye: number;
  private pin: number;

  constructor(h: string, b: number, p: number) {
    this.hesapNumarası = h;
    this.bakiye = b;
    this.pin = p;
  }

  // public method
  public paraYatir(miktar: number): void {
    this.bakiye += miktar;
  }

  // protected method
  protected bakiyeSorgula(): number {
    return this.bakiye;
  }
}

const hesap = new BankaHesabi("1100030432003034500", 567000, 1234);
console.log(hesap.hesapNumarası);
hesap.paraYatir(1500);
